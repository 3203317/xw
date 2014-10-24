var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var ShopsSchema = new Schema({
	ShopsName: {
		type: String
	}, Email: {
		type: String
	}, User_Id: {
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

mongoose.model('Shops', ShopsSchema);
