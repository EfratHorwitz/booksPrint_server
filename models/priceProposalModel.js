var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var priceProposalSchema = new Schema({
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'userModel'
	},
	'bookId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'bookModel'
	},
	'price' : Number
});

module.exports = mongoose.model('priceProposal', priceProposalSchema);
