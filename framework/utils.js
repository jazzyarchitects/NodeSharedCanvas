
var successJSON = function(data){
	return {success: true, data: data};
};

var errorJSON = function(code, message, description){
	return {success: false, message: message, description: description};
};

var requireFromModule = function(filename){
	module.paths.push('./modules');
	return require(filename);
};

exports.successJSON  = successJSON;
exports.errorJSON = errorJSON;
exports.requireFromModule = requireFromModule;