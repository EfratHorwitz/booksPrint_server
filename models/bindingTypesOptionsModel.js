var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bindingTypesOptionsSchema = new Schema({
	'bookType' : String,
	// 'bindingType' : Array
	// 'orders' : [{type:mongoose.Types.ObjectId, ref:'order' }]
	'bindingType' : [{type:mongoose.Types.String}]
});

module.exports = mongoose.model('bindingTypesOptions', bindingTypesOptionsSchema);
