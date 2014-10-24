var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema({
	UserName: {
		// require: true,
		// match: /[a-z]/,
		unique: true,
		index: true,
		type: String
	}, UserPass: {
		type: String
	}, SecPass: {
		type: String,
		default: '123456'
	}, Sex: {
		type: Number,
		default: 3
	}, Nickname: {
		type: String,
		index: true,
		unique: true
	}, Birthday: {
		type: Date
	}, QQ: {
		type: String
	}, AckCode: {
		type: String
	}, Email: {
		type: String,
		index: true,
		unique: true,
		required: true
	}, Status: {
		type: Number,
		default: 0
	}, IsDel: {
		type: Number,
		default: 0
	}, ApiKey: {
		type: String
	}, SecKey: {
		type: String
	}
}, {
	versionKey: false,
	toObject: {
		virtuals: true
	}, toJSON: {
		virtuals: true
	}
});

/**
 *
 * @params {String} username
 * @params {Function} cb
 * @return {Object}
 */
UserSchema.statics.findByName = function(username, cb){
	this.findOne({
		UserName: new RegExp('^'+ username +'$', 'i')
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, doc);
	});
};

/**
 *
 * @params {String} username
 * @params {String} email
 * @params {Function} cb
 * @return {Object}
 */
UserSchema.statics.findByNameEmail = function(username, email, cb){
	this.findOne({
		'$or': [{
			UserName: new RegExp('^'+ username +'$', 'i')
		}, {
			Email: new RegExp('^'+ email +'$', 'i')
		}]
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, doc);
	});
};

/**
 *
 * @params {String} email
 * @params {Function} cb
 * @return {Object}
 */
UserSchema.statics.findByEmail = function(email, cb){
	this.findOne({
		Email: new RegExp('^'+ email +'$', 'i')
	}, null, null, function (err, doc){
		if(err) return cb(err);
		cb(null, doc);
	});
};

mongoose.model('User', UserSchema);
