var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookSchema = new Schema({
	'bookType' : String,
	'size' : String,
	'format' : String,
	'pagesNum' : Number,
	'paperType' : String,
	'color' : String,
	'coverType' : String,
	'coverAdditions' : String,
	'additions' : String,
	'booksNum' : Number
});

module.exports = mongoose.model('book', bookSchema);
