var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'bookId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'bookModel'
	},
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'userModel'
	},
	'orderDate' : Date,
	'orderStatus' : String,
	'orderPrice' : Number,
	'comments' : String
});

module.exports = mongoose.model('order', orderSchema);
