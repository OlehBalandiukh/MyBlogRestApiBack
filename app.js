let mongoose = require('mongoose');
let express = require('express');
let session = require('express-session');
let SiteRouter = require('./routes/site-router');


let router = require('express').Router();
let User = require('./models/User');

let ApiRouter = require('./routes/api-router');

mongoose.connect('mongodb://localhost:27017/RestBlog', {useNewUrlParser:true});

let app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'dsghjs44hj1510dsdgh',
    resave: false,
    saveUninitialized: false
}));


app.use(ApiRouter);
app.use(SiteRouter);

app.listen(3000, ()=>{
    console.log('Up and running on port 3000');
});