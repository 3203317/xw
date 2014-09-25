var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var util = require('../lib/util');

var UserServiceSchema = new Schema({
	User_Id: {		// 用户Id
		type: ObjectId
	}, Service_Id: {
		type: ObjectId
	}
}, {
	versionKey: false,
	toObject: {
		virtuals: true
	}, toJSON: {
		virtuals: true
	}
});

mongoose.model('UserService', UserServiceSchema);
