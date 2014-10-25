var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId;

var GoodsSchema = new Schema({
        GoodsName: {
                type: String,
                required: true,
        }, GoodsDesc: {
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

mongoose.model('Goods', GoodsSchema);
