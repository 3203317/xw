var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var GoodsExpandSchema = new Schema({
	Key: {
		type: String
	}, Value: {
		type: String
	}, Goods_Id: {
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

mongoose.model('GoodsExpand', GoodsExpandSchema);
