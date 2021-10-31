var PapertypesModel = require('../models/paperTypesModel.js');

/**
 * paperTypesController.js
 *
 * @description :: Server-side logic for managing paperTypess.
 */
module.exports = {

    /**
     * paperTypesController.list()
     */
    list: function (req, res) {
        PapertypesModel.find(function (err, paperTypess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paperTypes.',
                    error: err
                });
            }

            return res.json(paperTypess);
        });
    },

    /**
     * paperTypesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PapertypesModel.findOne({_id: id}, function (err, paperTypes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paperTypes.',
                    error: err
                });
            }

            if (!paperTypes) {
                return res.status(404).json({
                    message: 'No such paperTypes'
                });
            }

            return res.json(paperTypes);
        });
    },

    /**
     * paperTypesController.create()
     */
    create: function (req, res) {
        var paperTypes = new PapertypesModel({
			name : req.body.name
        });

        paperTypes.save(function (err, paperTypes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating paperTypes',
                    error: err
                });
            }

            return res.status(201).json(paperTypes);
        });
    },

    /**
     * paperTypesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PapertypesModel.findOne({_id: id}, function (err, paperTypes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paperTypes',
                    error: err
                });
            }

            if (!paperTypes) {
                return res.status(404).json({
                    message: 'No such paperTypes'
                });
            }

            paperTypes.name = req.body.name ? req.body.name : paperTypes.name;
			
            paperTypes.save(function (err, paperTypes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating paperTypes.',
                        error: err
                    });
                }

                return res.json(paperTypes);
            });
        });
    },

    /**
     * paperTypesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PapertypesModel.findByIdAndRemove(id, function (err, paperTypes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the paperTypes.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
