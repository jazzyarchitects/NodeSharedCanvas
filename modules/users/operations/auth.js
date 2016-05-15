var User = require('./../userModel');
var jwt = require('jwt-simple');
var login = function* (user){
  return new Promise((resolve, reject) => {
      var userResult = yield User.find({email: user.email},'+password').exec();
      if(isPasswordSame(user.password, userResult.password)){
        resolve(successJSON(userResult));
      }else{
        reject(errorJSON(501, "Invalid email and password combination", "AUTHENTICATION_ERROR"));
      }
  });
};





exports.login = login;
