var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var RoleSchema = new Schema({
	RoleName: {
		unique: true,
		index: true,
		type: String
	}, RoleDesc: {
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

mongoose.model('Role', RoleSchema);
