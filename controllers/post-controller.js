let Post = require('../models/Post');

let controller = {};

controller.findById = async (req, res, next)=>{
    try {
        res.json(await Post.findById(req.params.id));
    }catch (e) {
        next(e);
    }
};
controller.find = async (req, res, next)=>{
    try {
        res.json(await Post.find({}));
    }catch (e) {
        next(e);
    }
};
controller.create = async(req, res, next)=>{
    try {
        res.json(await Post.create(req.body));
    }catch (e) {
        next(e);
    }
};
controller.findByIdAndUpdate = async (req, res, next)=>{
    try {
        //new: true returns already updated element
        res.json(await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    }catch (e) {
        next(e);
    }
};
controller.findByIdAndRemove = async(req, res, next)=>{
    try {
        res.json(await Post.findByIdAndRemove(req.params.id));
    }catch (e) {
        next(e);
    }
};

module.exports = controller;