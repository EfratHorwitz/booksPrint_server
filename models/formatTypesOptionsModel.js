var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var formatTypesOptionsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('formatTypesOptions', formatTypesOptionsSchema);
