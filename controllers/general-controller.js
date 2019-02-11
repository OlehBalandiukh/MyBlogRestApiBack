let controller = {};

controller.index = (req, res, next)=>{
    console.log('In /');
    console.log('Current user ');
    console.log(req.session.user);
    res.end(' ',{user: req.session.user});
};

//For future purpose
controller.about = (req, res, next)=>{
    console.log('In /about');
    console.log('Current user ');
    console.log(req.session.user);
    res.end(' ',{user: req.session.user});
};

module.exports = controller;