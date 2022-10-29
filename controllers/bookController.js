//const { SchemaTypes } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookModel = require('../models/bookModel.js');
const url = require('url');

/**
 * bookController.js
 *
 * @description :: Server-side logic for managing books.
 */
module.exports = {

    /**
     * bookController.list()
     */
    list: function (req, res) {
        BookModel.find(function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }

            return res.json(books);
        });
    },

    /**
     * bookController.show()
     */

    show: function (req, res) {
        var id = req.params.id;

        BookModel.findOne({ _id: id }, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }

            if (!book) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            return res.json(book);
        });
    },

    /**
     * bookController.showAll()
     */

    showAll: function (req, res) {
        var id = req.params.id;
        
        //let filterMe = { userId: mongoose.Types.ObjectId('635b8cba6401d1b0a468b2b3') }
        let filterMe = { userId: mongoose.Types.ObjectId(id) }
        BookModel.find(filterMe, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }

            if (!book) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            return res.json(book);
        });
    },

    /**
     * bookController.create()
     */
    create: function (req, res) {
        var book = new BookModel({
            userId: req.body.userId,
            bookType: req.body.bookType,
            size: req.body.size,
            format: req.body.format,
            pagesNum: req.body.pagesNum,
            paperType: req.body.paperType,
            color: req.body.color,
            coverType: req.body.coverType,
            coverAdditions: req.body.coverAdditions,
            additions: req.body.additions,
            booksNum: req.body.booksNum,
            price: req.body.price
        });

        book.save(function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating book',
                    error: err
                });
            }

            return res.status(201).json(book);
        });
    },

    /**
     * bookController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BookModel.findOne({ _id: id }, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book',
                    error: err
                });
            }

            if (!book) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            book.userId = req.body.userId ? req.body.userId : book.userId;
            book.bookType = req.body.bookType ? req.body.bookType : book.bookType;
            book.size = req.body.size ? req.body.size : book.size;
            book.format = req.body.format ? req.body.format : book.format;
            book.pagesNum = req.body.pagesNum ? req.body.pagesNum : book.pagesNum;
            book.paperType = req.body.paperType ? req.body.paperType : book.paperType;
            book.color = req.body.color ? req.body.color : book.color;
            book.coverType = req.body.coverType ? req.body.coverType : book.coverType;
            book.coverAdditions = req.body.coverAdditions ? req.body.coverAdditions : book.coverAdditions;
            book.additions = req.body.additions ? req.body.additions : book.additions;
            book.booksNum = req.body.booksNum ? req.body.booksNum : book.booksNum;
            book.price = req.body.price ? req.body.price : book.price;

            book.save(function (err, book) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating book.',
                        error: err
                    });
                }

                return res.json(book);
            });
        });
    },

    /**
     * bookController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BookModel.findByIdAndRemove(id, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the book.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
