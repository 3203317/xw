var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var ShopsRoleSchema = new Schema({
	RoleName: {
		index: true,
		type: String
	}, RoleDesc: {
		type: String
	}, Shops_Id: {
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

mongoose.model('ShopsRole', ShopsRoleSchema);
