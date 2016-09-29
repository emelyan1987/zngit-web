
module.exports = function(Actor) {
  var loopback = require('loopback');

  Actor.observe('access', function logQuery(ctx, next) {
    //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    if(!ctx.query.where)
      ctx.query.where = {};

    if(!ctx.query.where.and)
      ctx.query.where.and = [];

    ctx.query.where.and.push({or:[{is_deleted:null},{is_deleted:false}]});
    next();
  });

  Actor.observe('before save', function(ctx, next) {
    var context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken?accessToken.userId:null;

      var email, id;

      if(ctx.isNewInstance) {
        email = ctx.instance.email;
      } else {
        email = ctx.data.email;
      }

      if(email) {
        Actor.find({where:{email:email}}, function(err, users) { console.log("USERS"); console.log(users);
          if(err) {
            next(err); return;
          }
          if(users.length>0) {
            var id = users[0].id;
            if(userId != id) {           console.log("UserID="+userId+":id="+id);
              next(new Error("The email duplicated!")); return;
            }
          }
          next();
        });
      } else {
        next();
      }
  });

  Actor.observe('after save', function(ctx, next) { console.log("Actor after save observe");
    if (ctx.isNewInstance) {
      console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
      var zngit = Actor.app.get('zngit');
      var html = '<style>.zngit_email div{padding:10px;}</style>'+
        '<div class="zngit_email">'+
        '<div>Hey there,</div>'+
        '<div>Welcome to ZNGIT. Experience outdoor recreation at the tip of your finger.</div>'+
        '<div>Have a fantastic day!</div>'+
        '<div>- ZNGIT Team</div>'+
        '</div>';
          //console.log("EmailAddress:"+zngit.email);
      Actor.app.models.Email.send({
        to: ctx.instance.email,
        from: zngit.email,
        subject: 'Welcome to ZNGIT!',
        html: html
      }, function(err) {
        if (err) return console.log('> error sending register user email');
        console.log('> sended register user email to:', ctx.instance.email);
      });
    }

    next();
  });

  Actor.afterRemote( "login", function( ctx, modelInstance, next) { console.log("After Remote");
    var user = ctx.result.toJSON().user;

    next();
  });

  Actor.list = function(params, cb) {

    var context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = Actor.app,
        userType = context.get('userType');

        if(!userType) {
          cb("Could not get current user type"); return;
        }

        console.log("User Type = "+userType);
        if(userType == 'S') {//if user is ShopOwner
          var shopId = context.get('shopId');
          if(!shopId) {
            cb("Could not get shop list of user", null); return;
          }

          var ds = app.datasources.ZngitDB;
          var sql = "SELECT DISTINCT u.id, u.fullname, u.type, u.email, u.transaction_time, u.transaction_id, u.is_deleted FROM zn_user AS u RIGHT JOIN zn_customer AS c ON c.customer_id=u.id WHERE u.type!='A' AND c.shop_id="+shopId;
          console.log("ActorList SQL"); console.log(sql);

          ds.connector.execute(sql, [], function (err, customers) {
            if (err) {
              cb(err, null); return;
            }

            cb(null, customers);
          });
        } else if(userType == 'A') { // if user is Administrator
          Actor.find({where:{type:{neq:'A'}}},function(err, users){
            if(err) {
              cb(err, null);
              return;
            }

            //console.log("Users:");
            //console.log(users);
            cb(null, users);
          });
        } else {
          cb(null, []);
        }


  };
  Actor.remoteMethod('list', {
    accepts: {arg: 'params', type: 'object'},
    returns: {arg: 'users', type: ['Actor'], root: true},
    http: {path:'/list', verb: 'get'}
  });


  Actor.loginByAccessToken = function(cb) {
    var context = loopback.getCurrentContext(),
        accessToken = context.get('accessToken'),
        userId = accessToken.userId,
        app = Actor.app;

    Actor.findById(userId, {include:{'shop':'balance'}}, function(err, user){
      if(err) {
        cb(err, null); return;
      }

      console.log("loginByAccessToken RESULT"); console.log(user);

      cb(null, user);
    });
  };
  Actor.remoteMethod('loginByAccessToken', {
    returns: {arg: 'user', type: 'Actor'},
    http: {path:'/loginByAccessToken', verb: 'post'}
  });

  //send password reset link when requested
  Actor.on('resetPasswordRequest', function(info) {
    var app = Actor.app,
        zngit = app.get('zngit');

    var url = 'http://' + zngit.host  + '/reset-password'; //console.log("ResetPassword:"+url);
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '&user_id='+info.accessToken.userId+'">here</a> to reset your password<br><br>Have a great day!<br><br>- ZNGIT Team';
        //console.log("EmailAddress:"+zngit.email);
    Actor.app.models.Email.send({
      to: info.email,
      from: zngit.email,
      subject: 'Reset your password',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sended password reset email to:', info.email);
    });
  });


  Actor.signupWithFacebook = function(email, name, cb) {
    Actor.create({email:email, fullname:name, type: 'C', password: Actor.app.get('zngit').facebook_password, social_type:'facebook'}, function(err, user){
      if(err) {
        cb(err, null); return;
      }
      Actor.login({email:user.email,password:Actor.app.get('zngit').facebook_password},'user',function(err, accessToken){
        if(err) {
          cb(err, null); return;
        }
        cb(null, accessToken);
      });

    });

  };
  Actor.remoteMethod('signupWithFacebook', {
    accepts: [{arg:'email', type:'string', required:true},{arg:'name', type:'string', required:true}],
    returns: {arg: 'accessToken', type: 'Object'},
    http: {path:'/signupWithFacebook', verb: 'post'}
  });

  Actor.loginWithFacebook = function(email, cb) {
    Actor.login({email:email,password:Actor.app.get('zngit').facebook_password},'user',function(err, accessToken){
      if(err) {
        cb(err, null); return;
      }
      cb(null, accessToken);
    });

  };
  Actor.remoteMethod('loginWithFacebook', {
    accepts: {arg:'email', type:'string', required:true},
    returns: {arg: 'accessToken', type: 'Object'},
    http: {path:'/loginWithFacebook', verb: 'post'}
  });
};
