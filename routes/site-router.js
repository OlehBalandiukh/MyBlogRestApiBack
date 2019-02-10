let SiteRouter = require('express').Router();
//Check if needed
//let session = require('express-session');
let User = require('../models/User');

SiteRouter.post('/register', async (req, res, next)=>{
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
    };
});

SiteRouter.post('/login', async (req, res, next)=>{
    console.log('In /login');
    let credentials = req.body;
    let user = await User.findOne({login: credentials.login, password: credentials.password});
    if(user){
        req.session.user = user;
        res.redirect('/');
    } else {
        res.redirect('/');
    }
});

SiteRouter.get('/logout', (req, res, next)=>{
    console.log('In /logout');
    req.session.user = null;
    res.redirect('/');
});

SiteRouter.get('/', (req, res, next)=>{
    console.log('In /');
    console.log('Current user ');
    console.log(req.session.user);
    //Check if returns cookies
    res.end(' ',{user: req.session.user});
});

//works incorrect
// SiteRouter.use((req, res, next)=>{
//     req.status(404).end("Page not found!");
//     console.log("404");
// });

//print 500 every time
// SiteRouter.use((err, req, res, next)=>{
//     res.status(500).json(err);
//     console.log("500");
// })

module.exports = SiteRouter;