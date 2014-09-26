var mongoose = require('mongoose'),
	settings = require('../settings');

var db = mongoose.connection;
var url = 'mongodb://'+ settings.user +':'+ settings.pass +'@'+ settings.host +':'+ settings.port +'/'+ settings.db;

db.on('error', console.error);
db.once('open', function(){
	console.log(url);
});

mongoose.connect(url, function (err){
	if(err){
		console.log('Connect to %s Error: ', url, err.message);
		process.exit(1);
	}
});

// models
require('./User');
require('./Article');
require('./Comment');
require('./Company');
require('./Category');
require('./Tag');
require('./Product');
require('./Service');
require('./UserService');

exports.User = mongoose.model('User');
exports.Article = mongoose.model('Article');
exports.Comment = mongoose.model('Comment');
exports.Company = mongoose.model('Company');
exports.Category = mongoose.model('Category');
exports.Tag = mongoose.model('Tag');
exports.Product = mongoose.model('Product');
exports.Service = mongoose.model('Service');
exports.UserService = mongoose.model('UserService');
