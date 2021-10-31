var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var sizeOptionsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('sizeOptions', sizeOptionsSchema);
