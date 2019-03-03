const User = require('../models/User');
const passport = require('passport');

let controller = {};

controller.login = passport.authenticate(
    'login',
    {
        successRedirect: '/',
        failureRedirect: '/about'
    }
);

controller.logout = (req, res, next) => {
    req.logout();
    res.redirect('/');
};

controller.register = passport.authenticate(
    'register',
    {
        successRedirect: '/',
        failureRedirect: '/about'
    }
);

module.exports = controller;