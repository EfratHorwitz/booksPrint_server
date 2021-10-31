var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var paperTypesSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('paperTypes', paperTypesSchema);
