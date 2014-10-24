var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId;

var BranchSchema = new Schema({
        BranchName: {
                type: String
        }, Address: {
                type: String
        }, Shops_Id: {
		type: ObjectId
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

mongoose.model('Branch', BranchSchema);
