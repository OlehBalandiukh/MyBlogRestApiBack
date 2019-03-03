const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await User.findById(id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (e) {
        return done(e);
    }
});

passport.use('register', new localStrategy(
    {
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, login, password, done) {
        try {
            console.log('In passport /register');
            let user = await User.findOne({
                login,
                password
            });
            console.log(user);
            if (user) {
                console.log('User already exist');
                return done(null, false);
            } else {
                console.log('New user created');
                let principal = await User.create(req.body);
                return done(null, principal);
            }
        } catch (e) {
            return done(e);
        }
    }
));

passport.use('login', new localStrategy(
    {
        usernameField: 'login',
        passwordField: 'password'
    },
    async function (login, password, done) {
        try {
            console.log('In passport /login');
            let user = await User.findOne({
                login,
                password
            });
            if (user) {
                console.log('User exist');
                return done(null, user);
            } else {
                console.log('User douse not exist');
                return done(null, false);
            }
        } catch (e) {
            return done(e);
        }
    }
));