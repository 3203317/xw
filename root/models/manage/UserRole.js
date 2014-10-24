var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var UserRoleSchema = new Schema({
	Role_Id: {
		index: !0,
		type: ObjectId
	}, User_Id: {
		index: !0,
		type: ObjectId
	}
});

mongoose.model('UserRole', UserRoleSchema);
