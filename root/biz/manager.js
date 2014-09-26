var md5 = require('../lib/md5');

var models = require('../models'),
	Manager = models.Manager;

exports.disable = function(user_name, cb){
	Manager.findUserByName(user_name, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户', 'UserName']);
		doc.update({
			IsEnable: 0
		}, function (err, count){
			if(err) return cb(err);
			cb(null, 0, null, count);
		});
	});
};

exports.enable = function(user_name, cb){
	Manager.findUserByName(user_name, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户', 'UserName']);
		doc.update({
			IsEnable: 1
		}, function (err, count){
			if(err) return cb(err);
			cb(null, 0, null, count);
		});
	});
};

exports.editInfo = function(newInfo, cb){
	var id = newInfo.id;
	delete newInfo.id;

	Manager.update({
		_id: id
	}, newInfo, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};

exports.saveNew = function(newInfo, cb){
	Manager.findUserByName(newInfo.UserName, function (err, doc){
		if(err) return cb(err);
		if(doc) return cb(null, 3, ['该用户已存在', 'UserName'], doc);
		Manager.create(newInfo, function (err, doc){
			if(err) return cb(err);
			cb(null, 0, null, doc);
		});
	});
};

exports.findAll = function(cb){
	Manager.find(null, null, {
		sort: {
			_id: 1
		}
	}, function (err, docs){
		if(err) return cb(err);
		cb(null, 0, null, docs);
	});
};

exports.login = function(logInfo, cb){
	Manager.findUserByName(logInfo.UserName, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户。', 'UserName']);
		if(md5.hex(logInfo.UserPass) !== doc.UserPass)
			return cb(null, 6, ['用户名或密码输入错误。', 'UserPass'], doc);
		cb(null, 0, null, doc);
	});
};

exports.changePwd = function(user_id, oldPass, newPass, cb){
	Manager.findOne({
		_id: user_id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户。', 'UserName']);
		if(md5.hex(oldPass) !== doc.UserPass)
			return cb(null, 6, ['用户名或密码输入错误。', 'UserPass'], doc);
		doc.update({
			UserPass: md5.hex(newPass)
		}, function (err, count){
			if(err) return cb(err);
			cb(null, 0, null, count);
		});
	});
};
