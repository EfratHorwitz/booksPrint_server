var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookSchema = new Schema({
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'userModel'
	},
	'bookType' : String,
	'size' : String,
	'format' : String,
	'pagesNum' : Number,
	'paperType' : String,
	'color' : String,
	'coverType' : String,
	'coverAdditions' : String,
	'additions' : String,
	'booksNum' : Number,
	'price' : Number
});

module.exports = mongoose.model('book', bookSchema);
