var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var util = require('../lib/util');

var ServiceSchema = new Schema({
	ServName: {
		type: String,
		required: true,
		unique: true
	}, ServDesc: {
		type: String
	}, Price: {
		type: Number
	}, User_Id: {		// 用户Id
		type: ObjectId
	}, Product_Id: {
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

mongoose.model('Service', ServiceSchema);
