var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var util = require('../lib/util');

var UserCustomerSchema = new Schema({
	User_Id: {		// 用户Id
		type: ObjectId
	}, Customer_Id: {
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

mongoose.model('UserCustomer', UserCustomerSchema);
