var md5 = require('../lib/md5');

var models = require('../models'),
	User = models.User;

exports.remove = function(id, cb){
	User.update({
		_id: id
	}, {
		IsDel: 1
	}, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};

exports.editInfo = function(info, cb){
	User.update({
		_id: info.id
	}, {
		Sex: info.Sex,
		QQ: info.QQ
	}, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};

exports.findAll = function(cb){
	User.find(null, null, {
		sort: {
			_id: 1
		}
	}, function (err, docs){
		if(err) return cb(err);
		cb(null, 0, null, docs);
	});
};

/**
 * 用户登陆
 *
 * @params {Object} logInfo 用户登陆信息
 * @params {Function} cb 回调函数
 * @return
 */
exports.login = function(logInfo, cb){
	User.findByEmail(logInfo.Email, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户。', 'Email']);
		if(md5.hex(logInfo.UserPass) !== doc.UserPass)
			return cb(null, 6, ['电子邮箱或密码输入错误。', 'UserPass'], doc);
		cb(null, 0, null, doc);
	});
};

exports.addMgr = function(info, cb){
	User.findByEmail(info.Email, function (err, doc){
		if(err) return cb(err);
		if(doc) return cb(null, 3, ['电子邮箱已经存在', 'Email'], doc);

		var newInfo = {
			Type: 1,
			Status: 3,
			IsDel: 0,
			SecPass: info.UserPass,
			UserPass: md5.hex(info.UserPass),
			Email: info.Email
		};
		User.create(newInfo, function (err, doc){
			if(err) return cb(err);
			cb(null, 0, null, doc);
		});
	});
};

exports.register = function(info, cb){
	/* 查询邮箱是否存在 */
	User.findByEmail(info.Email, function (err, doc){
		if(err) return cb(err);
		/* 如果用户对象存在，则说明电子邮箱存在，返回提示信息 */
		if(doc) return cb(null, 3, ['电子邮箱已经存在。', 'Email'], doc);
		/* 用户对象入库之前的其他数据初始化工作 */
		var newInfo = {
			Type: 3,
			Status: 0,
			IsDel: 0,
			SecPass: info.UserPass,
			UserPass: md5.hex(info.UserPass),
			Email: info.Email
		};
		/* 开始创建新用户 */
		User.create(newInfo, function (err, doc){
			if(err) return cb(err);
			cb(null, 0, null, doc);
		});
	});
};

exports.findByName = function(user_name, cb){
	User.findByName(user_name, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

exports.findById = function(id, cb){
	User.findOne({
		_id: id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

exports.changePwd = function(user_id, oldPass, newPass, cb){
	User.findOne({
		_id: user_id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['找不到该用户。', 'Email']);
		if(md5.hex(oldPass) !== doc.UserPass)
			return cb(null, 6, ['原始密码输入错误。', 'UserPass'], doc);
		doc.update({
			UserPass: md5.hex(newPass)
		}, function (err, count){
			if(err) return cb(err);
			cb(null, 0, null, count);
		});
	});
};
