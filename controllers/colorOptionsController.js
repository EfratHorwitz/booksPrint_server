var ColoroptionsModel = require('../models/colorOptionsModel.js');

/**
 * colorOptionsController.js
 *
 * @description :: Server-side logic for managing colorOptionss.
 */
module.exports = {

    /**
     * colorOptionsController.list()
     */
    list: function (req, res) {
        ColoroptionsModel.find(function (err, colorOptionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colorOptions.',
                    error: err
                });
            }

            return res.json(colorOptionss);
        });
    },

    /**
     * colorOptionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ColoroptionsModel.findOne({_id: id}, function (err, colorOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colorOptions.',
                    error: err
                });
            }

            if (!colorOptions) {
                return res.status(404).json({
                    message: 'No such colorOptions'
                });
            }

            return res.json(colorOptions);
        });
    },

    /**
     * colorOptionsController.create()
     */
    create: function (req, res) {
        var colorOptions = new ColoroptionsModel({
			name : req.body.name
        });

        colorOptions.save(function (err, colorOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating colorOptions',
                    error: err
                });
            }

            return res.status(201).json(colorOptions);
        });
    },

    /**
     * colorOptionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ColoroptionsModel.findOne({_id: id}, function (err, colorOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colorOptions',
                    error: err
                });
            }

            if (!colorOptions) {
                return res.status(404).json({
                    message: 'No such colorOptions'
                });
            }

            colorOptions.name = req.body.name ? req.body.name : colorOptions.name;
			
            colorOptions.save(function (err, colorOptions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating colorOptions.',
                        error: err
                    });
                }

                return res.json(colorOptions);
            });
        });
    },

    /**
     * colorOptionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ColoroptionsModel.findByIdAndRemove(id, function (err, colorOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the colorOptions.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
