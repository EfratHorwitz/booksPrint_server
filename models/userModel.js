var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'fullname' : String,
	'username' : String,
	'password' : Number,
	'email' : String,
	'orders' : [{type:mongoose.Types.ObjectId, ref:'order' }]
});

module.exports = mongoose.model('user', userSchema);
