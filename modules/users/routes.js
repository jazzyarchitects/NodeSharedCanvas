/**
 * Created by jibinmathews on 4/5/16.
 */

var express = require('express');
var router = express.Router();


router.get('/',function(req, res){

});

router.post('/', function(req, res){

});

router.put('/', function(req, res){

});

router.delete('/', function(req, res){

});


module.exports = function(app){
  app.use('/user', router);
};


