var express = require('express');
var jwt = require('jwt-simple');
var bodyParser = require("body-parser");
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');


module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(morgan('dev'));
    //
    // set .html as the default extension
    app.set('view engine', 'html');

    // Enable jsonp
    app.enable('jsonp callback');

    // The cookieParser should be above session
    app.use(cookieParser());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Error handler
        app.use(errorHandler());

    console.log("Canvas is now being shared....")


};
