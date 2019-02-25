const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

let controller = {};

// controller.login = async (req, res, next) => {
//     try {
//         console.log('In /login');
//         let credentials = req.body;
//         let user = await User.findOne({login: credentials.login, password: credentials.password});
//         if (user) {
//             req.session.user = user;
//             res.redirect('/');
//         } else {
//             res.redirect('/');
//         }
//     } catch (e) {
//         next(e);
//     }
// };

 controller.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/about'
    })(req, res, next);
};

controller.logout = (req, res, next) => {
    try {
        console.log('In /logout');
        req.session.user = null;
        res.redirect('/');
    } catch (e) {
        next(e);
    }
};
controller.register = async (req, res, next) => {
    try {
        //For future purpose
        let errors = [];
        console.log('In /register');
        const {name, surName, yearOfBorn, about, nickName, login, password, passwordConfirmation} = req.body;

        if (!name || !surName || !login || !password || !passwordConfirmation) {
            errors.push({msg: "Please fill required fields"});
        }

        if (password !== passwordConfirmation) {
            errors.push({msg: "Passwords do not mach"});
        }

        if (password.length < 6) {
            errors.push({msg: "Password should be least 6 characters"});
        }

        if (errors.length > 0) {
            console.log("Body contains an errors");
            res.redirect('/register');

        } else {
            User.findOne({login: login})
                .then(user => {
                    if (user) {
                        console.log("User is already registered");
                        errors.push({msg: "Email is already registered"});
                        res.redirect('/register');
                    } else {
                        const newUser = new User({
                            name,
                            surName,
                            yearOfBorn,
                            about,
                            nickName,
                            login,
                            password
                        });
                        //hash users password
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) throw err;
                                //set password to hashed
                                newUser.password = hash;
                                //save user
                                newUser
                                    .save()
                                    .then(user => {
                                        console.log("New user is created");
                                        console.log(newUser);
                                        res.redirect('/login');
                                    })
                            });
                        });
                    }
                });
        }
    } catch (e) {
        next(e);
    }
};

module.exports = controller;