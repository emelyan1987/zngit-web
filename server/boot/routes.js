module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/backend', function(req, res) {
    res.render('index', {
      loginFailed: false
    });
  });

  router.post('/backend/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    app.models.Actor.login({
      "email": email,
      "password": password
    }, 'user', function(err, token) {
      if (err)
      {
        console.log("Login failed:"+email+":"+password+"ERROR:"+err);
        return res.render('index', {
          email: email,
          password: password,
          loginFailed: true
        });
      }



      res.render('success', {
        fullname: token.user.fullname,
        accessToken: token.id,
        redirectUri: app.get('loopback-component-explorer').mountPath
      });
    });
  });

  router.get('/backend/logout', function(req, res) {
    var AccessToken = app.models.AccessToken;
    var token = new AccessToken({id: req.query['access_token']});


    app.models.Actor.logout(token.id, function (err) {
         console.log(err || 'Logged out');
         token.destroy();
         res.redirect('/');
    });

  });


  //show password reset form
  app.get('/reset-password', function(req, res, next) { console.log("ReesetPassword"); console.log(req.accessToken);

    if (!req.accessToken) return res.sendStatus(401);


    res.render('password-reset', {
      //accessToken: req.accessToken.id
      accessToken: req.query.access_token,
      userId: req.query.user_id
    });
  });
  //reset the user's pasword
  app.post('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    var access_token = req.accessToken.id,
        user_id = req.accessToken.userId;
    if (!access_token || !user_id) return res.sendStatus(401);

    //verify passwords match
    if (!req.body.password ||
        !req.body.confirmation ||
        req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    app.models.Actor.findById(user_id, function(err, user) {
      if (err) return res.sendStatus(404); console.log("Found the user"); console.log(user);
      user.updateAttribute('password', req.body.password, function(err, user) {
      if (err) return res.sendStatus(404);
        console.log('> password reset processed successfully');
        res.render('response', {
          title: 'Password reset success',
          content: 'Your password has been reset successfully',
          redirectTo: '/',
          redirectToLinkText: 'Log in'
        });
      });
    });
  });

  app.use(router);
};
