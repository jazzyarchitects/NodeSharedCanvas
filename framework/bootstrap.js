var mongoose = require('mongoose');
var utils = require('./utils');
var express = require('express');
var fs = require('fs');
var path = require('path');
var rootDir = path.join(__dirname, '..');

global.successJSON = utils.successJSON;
global.errorJSON = utils.errorJSON;
global.requireFromModule = utils.requireFromModule;


module.exports = function (config) {
    global.app = express();
    require('./express')(app);

    function connectDB() {
        mongoose.connect(config.db.url, function(){
           console.log("Mongo connected");
        });
    }

    function debugSave(data, filename) {
        var tmpFolder = path.join(rootDir, '.tmp');
        fs.writeFileSync(path.join(tmpFolder, filename), JSON.stringify(data));
        console.log(filename+" created");
    }

    function scanRoutes() {
        var apiRouter = express.Router();
        var parentPath = './modules';
        fs.readdirSync('./modules').forEach(function (dir) {
            var dirPath = path.join(parentPath, dir);
            var dirStat = fs.statSync(dirPath);
            if (dirStat.isDirectory()) {
                var targetFile = path.join(dirPath, 'routes.js');
                if (fs.existsSync(targetFile)) {
                    require(path.join(rootDir, targetFile))(apiRouter);
                }
            }
        });
        // debugSave(apiRouter.stack, 'RouterStack.json');
        app.use('/api',apiRouter);
        app._router.stack.forEach(function(r){
            console.log("Route listing: "+JSON.stringify(r));
           if(r.route && r.route.path){
               console.log(r.route.path);
           }
        });
    }


    connectDB();
    scanRoutes();

    return app;

};
