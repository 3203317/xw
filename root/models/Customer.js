var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var CustomerSchema = new Schema({
	CustName: {				// 用户名
		// required: true,
		// match: /[a-z]/,
		unique: true,
		type: String
	}, UserPass: {			// 密码
		type: String
	}, SecPass: {			// 加密后密码
		type: String,
		default: '123456'
	}, Sex: {				// 性别
		type: Number,
		default: 3
	}, Nickname: {			// 昵称
		type: String
	}, Birthday: {			// 生日
		type: Date
	}, QQ: {
		type: String
	}, AckCode: {			// 用户注册邮箱认证码
		type: String
	}, Email: {				// 邮箱
		type: String,
		index: true,
		required: true
	}, SafeEmail: {			// 安全邮箱
		type: String
	}, Status: {			// 状态, 未激活0, 邮箱激活1, 短信激活2
		type: Number,
		default: 0
	}, IsDel: {				// 删除标记, 删除1, 否0
		type: Number,
		default: 0
	}
}, {
	versionKey: false,
	toObject: {
		virtuals: true
	}, toJSON: {
		virtuals: true
	}
});

mongoose.model('Customer', CustomerSchema);
