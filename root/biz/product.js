var models = require('../models'),
	Product = models.Product;

/**
 * 保存新
 *
 * @params {Object} newInfo
 * @params {Function} cb
 * @return
 */
exports.saveNew = function(newInfo, cb){
	Product.create(newInfo, function (err, doc){
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
	Product.find(null, null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, 0, null, docs);
	});
};

exports.remove = function(id, cb){
	Product.remove({
		_id: id
	}, function (err, count){
		if(err) return cb(err);
		cb(null, 0, '删除成功', count);
	});
};

exports.findById = function(id, cb){
	Product.findOne({
		_id: id
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, 0, null, doc);
	});
};

exports.editInfo = function(newInfo, cb){
	var id = newInfo.id;
	delete newInfo.id;

	Product.update({
		_id: id
	}, newInfo, function (err, count){
		if(err) return cb(err);
		cb(null, 0, null, count);
	});
};
