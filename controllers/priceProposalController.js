var PriceproposalModel = require('../models/priceProposalModel.js');

/**
 * priceProposalController.js
 *
 * @description :: Server-side logic for managing priceProposals.
 */
module.exports = {

    /**
     * priceProposalController.list()
     */
    list: function (req, res) {
        PriceproposalModel.find(function (err, priceProposals) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting priceProposal.',
                    error: err
                });
            }

            return res.json(priceProposals);
        });
    },

    /**
     * priceProposalController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PriceproposalModel.findOne({_id: id}, function (err, priceProposal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting priceProposal.',
                    error: err
                });
            }

            if (!priceProposal) {
                return res.status(404).json({
                    message: 'No such priceProposal'
                });
            }

            return res.json(priceProposal);
        });
    },

    /**
     * priceProposalController.create()
     */
    create: function (req, res) {
        var priceProposal = new PriceproposalModel({
			userId : req.body.userId,
			bookId : req.body.bookId,
			price : req.body.price
        });

        priceProposal.save(function (err, priceProposal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating priceProposal',
                    error: err
                });
            }

            return res.status(201).json(priceProposal);
        });
    },

    /**
     * priceProposalController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PriceproposalModel.findOne({_id: id}, function (err, priceProposal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting priceProposal',
                    error: err
                });
            }

            if (!priceProposal) {
                return res.status(404).json({
                    message: 'No such priceProposal'
                });
            }

            priceProposal.userId = req.body.userId ? req.body.userId : priceProposal.userId;
			priceProposal.bookId = req.body.bookId ? req.body.bookId : priceProposal.bookId;
			priceProposal.price = req.body.price ? req.body.price : priceProposal.price;
			
            priceProposal.save(function (err, priceProposal) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating priceProposal.',
                        error: err
                    });
                }

                return res.json(priceProposal);
            });
        });
    },

    /**
     * priceProposalController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PriceproposalModel.findByIdAndRemove(id, function (err, priceProposal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the priceProposal.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
