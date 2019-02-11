let User = require('../models/User');

let controller = {};

controller.login = async (req, res, next)=>{
    try {
        console.log('In /login');
        let credentials = req.body;
        let user = await User.findOne({login: credentials.login, password: credentials.password});
        if(user){
            req.session.user = user;
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    } catch (e) {
        next(e);
    }
};
controller.logout = (req, res, next)=>{
    try {
        console.log('In /logout');
        req.session.user = null;
        res.redirect('/');
    } catch (e) {
        next(e);
    }
};
controller.register = async (req, res, next)=>{
    try {
        console.log('In /register');
        let newUser = req.body;
        let alreadyExist = await User.countDocuments({login: newUser.login});
        if(alreadyExist){
            console.log('User already exist');
            res.redirect('/');
        } else {
            console.log('New user');
            let principal = await User.create(newUser);
            req.session.user = principal;
            res.redirect('/');
        }
    } catch (e) {
        next(e);
    }
};

module.exports = controller;