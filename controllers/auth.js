const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const db = require('../models/index');
const users = db.user;
const {constants} = require('./constants');

exports.authController = {
    signUp: (req, res) => {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 10);
        users.create(user).then((data) => {
            res.status(200).send({success: true, message: "Signup Successful"});
                        }).catch((err) => {
                    constants.handleErr(err, res)
                        })
    },
    signIn: (req, res) => {
        users.findOne({where: {
            email: req.body.email
        }}).then((user) => {
            if(!user) return res.status(401).send({message: "invalid username or password"});

            let isValidPassword = bcrypt.compareSync(req.body.password, user.password);
            if(!isValidPassword) return res.status(401).send({message: "Invalid username or password"});

            let payload = {
                id: user.id, 
                userType: user.userType
            };
            let token = jwt.sign(payload, process.env.secret, {expiresIn: 3000000});

            res.status(200).send({message: "sign in successful", data: payload, accessToken: token})
        }).catch((err) => {
            res.status(400).send({message:err.message || "could not fetch record"})
        })
    },
    forgotPassword: () => {}
};