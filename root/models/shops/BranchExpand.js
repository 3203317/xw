var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var ShopsExpandSchema = new Schema({
	Key: {
		type: String
	}, Value: {
		type: String
	}, Object_Id: {
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

mongoose.model('ShopsExpand', ShopsExpandSchema);
