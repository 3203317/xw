var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var util = require('../lib/util');

var ProductSchema = new Schema({
	ProdName: {
		type: String,
		required: true,
		unique: true
	}, ProdDesc: {
		type: String
	}, User_Id: {		// 用户Id
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

mongoose.model('Product', ProductSchema);
