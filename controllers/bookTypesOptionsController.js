var BooktypesoptionsModel = require('../models/bookTypesOptionsModel.js');

/**
 * bookTypesOptionsController.js
 *
 * @description :: Server-side logic for managing bookTypesOptionss.
 */
module.exports = {

    /**
     * bookTypesOptionsController.list()
     */
    list: function (req, res) {
        BooktypesoptionsModel.find(function (err, bookTypesOptionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookTypesOptions.',
                    error: err
                });
            }

            return res.json(bookTypesOptionss);
        });
    },

    /**
     * bookTypesOptionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BooktypesoptionsModel.findOne({_id: id}, function (err, bookTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookTypesOptions.',
                    error: err
                });
            }

            if (!bookTypesOptions) {
                return res.status(404).json({
                    message: 'No such bookTypesOptions'
                });
            }

            return res.json(bookTypesOptions);
        });
    },

    /**
     * bookTypesOptionsController.create()
     */
    create: function (req, res) {
        var bookTypesOptions = new BooktypesoptionsModel({
			name : req.body.name
        });

        bookTypesOptions.save(function (err, bookTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bookTypesOptions',
                    error: err
                });
            }

            return res.status(201).json(bookTypesOptions);
        });
    },

    /**
     * bookTypesOptionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BooktypesoptionsModel.findOne({_id: id}, function (err, bookTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookTypesOptions',
                    error: err
                });
            }

            if (!bookTypesOptions) {
                return res.status(404).json({
                    message: 'No such bookTypesOptions'
                });
            }

            bookTypesOptions.name = req.body.name ? req.body.name : bookTypesOptions.name;
			
            bookTypesOptions.save(function (err, bookTypesOptions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bookTypesOptions.',
                        error: err
                    });
                }

                return res.json(bookTypesOptions);
            });
        });
    },

    /**
     * bookTypesOptionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BooktypesoptionsModel.findByIdAndRemove(id, function (err, bookTypesOptions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bookTypesOptions.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
