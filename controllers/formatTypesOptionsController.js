var FormattypesoptionsModel = require('../models/formatTypesOptionsModel.js');

/**
 * formatTypesOptionsController.js
 *
 * @description :: Server-side logic for managing formatTypesOptionss.
 */
module.exports = {

    /**
     * formatTypesOptionsController.list()
     */
    list: function (req, res) {
        FormattypesoptionsModel.find(function (err, formatTypesOptionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting formatTypesOptions.',
                    error: err
                });
            }

            return res.json(formatTypesOptionss);
        });
    },

    /**
     * formatTypesOptionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FormattypesoptionsModel.findOne({_id: id}, function (err, formatTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting formatTypesOptions.',
                    error: err
                });
            }

            if (!formatTypesOptions) {
                return res.status(404).json({
                    message: 'No such formatTypesOptions'
                });
            }

            return res.json(formatTypesOptions);
        });
    },

    /**
     * formatTypesOptionsController.create()
     */
    create: function (req, res) {
        var formatTypesOptions = new FormattypesoptionsModel({
			name : req.body.name
        });

        formatTypesOptions.save(function (err, formatTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating formatTypesOptions',
                    error: err
                });
            }

            return res.status(201).json(formatTypesOptions);
        });
    },

    /**
     * formatTypesOptionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FormattypesoptionsModel.findOne({_id: id}, function (err, formatTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting formatTypesOptions',
                    error: err
                });
            }

            if (!formatTypesOptions) {
                return res.status(404).json({
                    message: 'No such formatTypesOptions'
                });
            }

            formatTypesOptions.name = req.body.name ? req.body.name : formatTypesOptions.name;
			
            formatTypesOptions.save(function (err, formatTypesOptions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating formatTypesOptions.',
                        error: err
                    });
                }

                return res.json(formatTypesOptions);
            });
        });
    },

    /**
     * formatTypesOptionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FormattypesoptionsModel.findByIdAndRemove(id, function (err, formatTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the formatTypesOptions.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
