var BindingtypesoptionsModel = require('../models/bindingTypesOptionsModel.js');

/**
 * bindingTypesOptionsController.js
 *
 * @description :: Server-side logic for managing bindingTypesOptionss.
 */
module.exports = {

    /**
     * bindingTypesOptionsController.list()
     */
    list: function (req, res) {
        BindingtypesoptionsModel.find(function (err, bindingTypesOptionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bindingTypesOptions.',
                    error: err
                });
            }

            return res.json(bindingTypesOptionss);
        });
    },

    /**
     * bindingTypesOptionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BindingtypesoptionsModel.findOne({_id: id}, function (err, bindingTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bindingTypesOptions.',
                    error: err
                });
            }

            if (!bindingTypesOptions) {
                return res.status(404).json({
                    message: 'No such bindingTypesOptions'
                });
            }

            return res.json(bindingTypesOptions);
        });
    },

    /**
     * bindingTypesOptionsController.create()
     */
    create: function (req, res) {
        var bindingTypesOptions = new BindingtypesoptionsModel({
			name : req.body.name
        });

        bindingTypesOptions.save(function (err, bindingTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bindingTypesOptions',
                    error: err
                });
            }

            return res.status(201).json(bindingTypesOptions);
        });
    },

    /**
     * bindingTypesOptionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BindingtypesoptionsModel.findOne({_id: id}, function (err, bindingTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bindingTypesOptions',
                    error: err
                });
            }

            if (!bindingTypesOptions) {
                return res.status(404).json({
                    message: 'No such bindingTypesOptions'
                });
            }

            bindingTypesOptions.name = req.body.name ? req.body.name : bindingTypesOptions.name;
			
            bindingTypesOptions.save(function (err, bindingTypesOptions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bindingTypesOptions.',
                        error: err
                    });
                }

                return res.json(bindingTypesOptions);
            });
        });
    },

    /**
     * bindingTypesOptionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BindingtypesoptionsModel.findByIdAndRemove(id, function (err, bindingTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bindingTypesOptions.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
