var models = require('../models'),
	Customer = models.Customer;

exports.saveNew = function(newInfo, cb){
	Customer.create(newInfo, function (err, doc){
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
	Customer.find(null, null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, 0, null, docs);
	});
};

exports.remove = function(id, cb){
	Customer.remove({
		_id: id
	}, function (err, count){
		if(err) return cb(err);
		cb(null, 0, '删除成功', count);
	});
};

exports.findById = function(id, cb){
	Customer.findOne({
		_id: id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

exports.editInfo = function(newInfo, cb){
	var id = newInfo.id;
	delete newInfo.id;

	Customer.update({
		_id: id
	}, newInfo, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};
