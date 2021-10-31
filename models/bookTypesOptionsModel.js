var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookTypesOptionsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('bookTypesOptions', bookTypesOptionsSchema);
