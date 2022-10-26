var UserModel = require('../models/userModel.js');
const jwt = require("jsonwebtoken");



/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */

const TOKEN_SECRET =
    "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (user) => {
    return jwt.sign({user}, TOKEN_SECRET);
};

const verifyUserFromToken = (token) => {
    let decoded;
    try {
        decoded = jwt.verify(token, TOKEN_SECRET);
    } catch (e) {
        return res.status(401).send('unauthorized');
    }
    return decoded;
}

module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function (req, res) {
        console.log("in create user",req.body);
        var user = new UserModel({
			fullname : req.body.fullname,
			username : req.body.username,
			password : req.body.password,
			email : req.body.email,			
        });
        const token = generateAccessToken(user);
        console.log("token", token);
        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }
            
            return res.status(200).json({user, token});
        });
    },

    verify: function (req, res) {
        // console.log("in create user",req.body);
        let token = req.body.token;
        // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZ1bGxuYW1lIjoibm93IiwidXNlcm5hbWUiOiJub3ciLCJvcmRlcnMiOltdLCJfaWQiOiI2MzU5ODU1YTlkOTM1NTlmNmY3MGYwZmMifSwiaWF0IjoxNjY2ODExMjI2fQ.LozznnSUv1tdi3un7NkA4DYh4o6msD4QXc0-KnSHzMQ";
        const user = verifyUserFromToken(token);
        // console.log("token", token);
        UserModel.findOne({_id: user.user._id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            return res.status(200).json(user);
        });
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.fullname = req.body.fullname ? req.body.fullname : user.fullname;
			user.username = req.body.username ? req.body.username : user.username;
			user.password = req.body.password ? req.body.password : user.password;
			user.email = req.body.email ? req.body.email : user.email;
			user.orders = req.body.orders ? req.body.orders : user.orders;
			
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UserModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
