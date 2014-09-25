var models = require('../models'),
	UserService = models.UserService;

/**
 * 保存新
 *
 * @params {Object} newInfo
 * @params {Function} cb
 * @return
 */
exports.saveNew = function(newInfo, cb){
	UserService.create(newInfo, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

/**
 * 查询
 *
 * @params {String}
 * @params {Function} cb
 * @return
 */
exports.findAll = function(cb){
	UserService.find(null, null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, 0, null, docs);
	});
};

exports.remove = function(id, cb){
	UserService.remove({
		_id: id
	}, function (err, count){
		if(err) return cb(err);
		cb(null, 0, '删除成功', count);
	});
};

exports.findById = function(id, cb){
	UserService.findOne({
		_id: id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

exports.editInfo = function(newInfo, cb){
	var id = newInfo.id;
	delete newInfo.id;

	UserService.update({
		_id: id
	}, newInfo, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};
