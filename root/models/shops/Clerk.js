var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var ClerkSchema = new Schema({
	ClerkName: {
		type: String
	}, Email: {
		type: String
	}, Role_Id: {
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

mongoose.model('Clerk', ClerkSchema);
