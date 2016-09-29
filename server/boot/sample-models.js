module.exports = function(app) {

  var ds = app.dataSources.ZngitDB;
  ds.isActual(function(err, actual) {
    console.log("DataSource isActual");
    if (!actual) {
        ds.autoupdate(function(err, result) {
            console.log("Updated successfully");
        });
    }
  });

  // var User = app.models.Actor;
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  // //var Team = app.models.Team;
  //
  // User.create([
  //   {username: 'emelyan', email: 'emelyan@zngit.com', password: 'emelyan', fullname: 'Emelyan Abramoff', type: 'A'},
  //   {username: 'andrewlee', email: 'andrewlee@zngit.com', password: 'andrewlee', fullname: 'Andrew Lee', type: 'A'},
  //   {username: 'michel', email: 'michel@zngit.com', password: 'michel', fullname: 'Michel Adrion', type: 'S'},
  //   {username: 'anton', email: 'anton@zngit.com', password: 'anton', fullname: 'Anton Ivanov', type: 'C'},
  //   {username: 'nicolai', email: 'nicolai@zngit.com', password: 'nicolai', fullname: 'Nicolai Anton', type: 'C'}
  // ], function(err, users) {
  //   if (err) throw err;
  //
  //   console.log('Created users:', users);
  //
  //
  //
  //   //create the admin role
  //   Role.create({
  //     name: 'admin'
  //   }, function(err, role) {
  //     if (err) throw err;
  //
  //     console.log('Created role:', role);
  //
  //     //make bob an admin
  //     role.principals.create({
  //       principalType: RoleMapping.USER,
  //       principalId: users[2].id
  //     }, function(err, principal) {
  //       if (err) throw err;
  //
  //       console.log('Created principal:', principal);
  //     });
  //   });
  // });
};
