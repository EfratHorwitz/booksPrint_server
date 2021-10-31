var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bindingTypesOptionsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('bindingTypesOptions', bindingTypesOptionsSchema);
