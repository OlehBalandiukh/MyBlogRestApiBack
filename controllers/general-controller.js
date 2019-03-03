let controller = {};

controller.index = (req, res, next)=>{
    console.log('In /');
    console.log('Current user ');
    console.log(req.user);
    res.end(' ',{user: req.user});
};

//For future purpose
controller.about = (req, res, next)=>{
    console.log('In /about');
    console.log('Current user ');
    console.log(req.user);
    res.end(' ',{user: req.user});
};

module.exports = controller;