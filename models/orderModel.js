var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'bookId' : Number,
	'userId' : {type:mongoose.Types.ObjectId, ref:'user' },
	'orderDate' : Date,
	'orderStatus' : String,
	'orderPrice' : Number,
	'comments' : String
});

module.exports = mongoose.model('order', orderSchema);
