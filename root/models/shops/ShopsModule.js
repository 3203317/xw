var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var ShopsModuleSchema = new Schema({
	ModuleName: {
		unique: true,
		index: true,
		type: String
	}, Url: {
		type: String
	}, Sort: {
		type: Number,
		default: 1
	}, P_Id: {
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

mongoose.model('ShopsModule', ShopsModuleSchema);
