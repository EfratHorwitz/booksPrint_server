var SizeoptionsModel = require('../models/sizeOptionsModel.js');

/**
 * sizeOptionsController.js
 *
 * @description :: Server-side logic for managing sizeOptionss.
 */
module.exports = {

    /**
     * sizeOptionsController.list()
     */
    list: function (req, res) {
        SizeoptionsModel.find(function (err, sizeOptionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting sizeOptions.',
                    error: err
                });
            }

            return res.json(sizeOptionss);
        });
    },

    /**
     * sizeOptionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        SizeoptionsModel.findOne({_id: id}, function (err, sizeOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting sizeOptions.',
                    error: err
                });
            }

            if (!sizeOptions) {
                return res.status(404).json({
                    message: 'No such sizeOptions'
                });
            }

            return res.json(sizeOptions);
        });
    },

    /**
     * sizeOptionsController.create()
     */
    create: function (req, res) {
        var sizeOptions = new SizeoptionsModel({
			name : req.body.name
        });

        sizeOptions.save(function (err, sizeOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating sizeOptions',
                    error: err
                });
            }

            return res.status(201).json(sizeOptions);
        });
    },

    /**
     * sizeOptionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        SizeoptionsModel.findOne({_id: id}, function (err, sizeOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting sizeOptions',
                    error: err
                });
            }

            if (!sizeOptions) {
                return res.status(404).json({
                    message: 'No such sizeOptions'
                });
            }

            sizeOptions.name = req.body.name ? req.body.name : sizeOptions.name;
			
            sizeOptions.save(function (err, sizeOptions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating sizeOptions.',
                        error: err
                    });
                }

                return res.json(sizeOptions);
            });
        });
    },

    /**
     * sizeOptionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        SizeoptionsModel.findByIdAndRemove(id, function (err, sizeOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the sizeOptions.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
