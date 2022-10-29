var OrderModel = require('../models/orderModel.js');
const url = require('url');

/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */
module.exports = {

    /**
     * orderController.list()
     */
    list: function (req, res) {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        let filterParams = {};
        if (queryObject.status) {
            filterParams.orderStatus = queryObject.status;
        }
        if (queryObject.fromDate) {
            filterParams.orderDate = {};
            filterParams.orderDate.$gte = queryObject.fromDate;
        }
        if (queryObject.toDate) {
            if(!filterParams.orderDate) {
                filterParams.orderDate = {};
            }
            filterParams.orderDate.$lt = queryObject.toDate ;
        }
        if (queryObject.userId) {
            filterParams.userId = mongoose.Types.ObjectId(queryObject.userId);
        }
        
        OrderModel.find(filterParams, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }

            return res.json(orders);
        });
    },

    /**
     * orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        
        // OrderModel.find({ order: 'john', age: { $gte: 18 } }).exec();
        OrderModel.findOne(id, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }
            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }

            return res.json(order);
        });
    },

    /**
     * orderController.create()
     */
    create: function (req, res) {
        var order = new OrderModel({
            bookId: req.body.bookId,
            userId: req.body.userId,
            orderDate: new Date(),
            orderStatus: req.body.orderStatus,
            orderPrice: req.body.orderPrice,
            comments: req.body.comments
        });

        order.save(function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating order',
                    error: err
                });
            }

            return res.status(201).json(order);
        });
    },

    /**
     * orderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        OrderModel.findOne({ _id: id }, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order',
                    error: err
                });
            }

            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }

            order.bookId = req.body.bookId ? req.body.bookId : order.bookId;
            order.userId = req.body.userId ? req.body.userId : order.userId;
            order.orderDate = req.body.orderDate ? req.body.orderDate : order.orderDate;
            order.orderStatus = req.body.orderStatus ? req.body.orderStatus : order.orderStatus;
            order.orderPrice = req.body.orderPrice ? req.body.orderPrice : order.orderPrice;
            order.comments = req.body.comments ? req.body.comments : order.comments;

            order.save(function (err, order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating order.',
                        error: err
                    });
                }

                return res.json(order);
            });
        });
    },

    /**
     * orderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        OrderModel.findByIdAndRemove(id, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the order.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
