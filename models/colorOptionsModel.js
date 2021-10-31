var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var colorOptionsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('colorOptions', colorOptionsSchema);
