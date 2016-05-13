var UserOperations = require('./operations');

function getUserObject(req){
  var user = {};
  var r = req.body;

  user.name = r.name;
  user.email = r.email;
  user.password = r.password;

  return user;
}


let login = function* (req, res){
  let loginResult = yield UserOperations.Auth.login(user);
  if(loginResult.success){
    var tokenResult = yield UserOperations.Auth.generateJWT(user);
  }
}
