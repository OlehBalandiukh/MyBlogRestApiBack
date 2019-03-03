const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const SiteRouter = require('./routes/site-router')
require ('./config/passport');
const passport = require('passport');

mongoose.connect('mongodb://localhost:27017/RestBlog', {useNewUrlParser:true});

let app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'dsghjs44hj1510dsdgh',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(SiteRouter);

app.listen(3000, ()=>{
    console.log('Up and running on port 3000');
});