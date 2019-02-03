let mongoose = require('mongoose');
let express = require('express');
let SiteRouter = require('./routes/site-router');

let ApiRouter = require('./routes/api-router');

mongoose.connect('mongodb://localhost:27017/RestBlog', {useNewUrlParser:true});

let app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(ApiRouter);
app.use(SiteRouter);

app.listen(3000, ()=>{
    console.log('Up and running on port 3000');
});