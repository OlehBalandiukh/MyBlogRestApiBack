const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const SiteRouter = require('./routes/site-router');
const passport = require('passport');

const app = express();

//passport config
require('./config/passport')(passport);

//DB config
const db = require('./config/kays').MongoURI;

//connect to mongo
mongoose.connect(db, {useNewUrlParser:true});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'dsghjs44hj1510dsdgh',
    resave: false,
    saveUninitialized: false
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(SiteRouter);

app.listen(3000, ()=>{
    console.log('Up and running on port 3000');
});