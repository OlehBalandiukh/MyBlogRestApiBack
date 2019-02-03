let Comment = require('../models/Comment');

let controller = {};

controller.findById = async (req, res, next)=>{
    try {
        res.json(await Comment.findById(req.params.id));
    }catch (e) {
        next(e);
    }
};
controller.find = async (req, res, next)=>{
    try {
        res.json(await Comment.find({}));
    }catch (e) {
        next(e);
    }
};
controller.create = async(req, res, next)=>{
    try {
        res.json(await Comment.create(req.body));
    }catch (e) {
        next(e);
    }
};
controller.findByIdAndUpdate = async (req, res, next)=>{
    try {
        //new: true returns already updated element
        res.json(await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    }catch (e) {
        next(e);
    }
};
controller.findByIdAndRemove = async(req, res, next)=>{
    try {
        res.json(await Comment.findByIdAndRemove(req.params.id));
    }catch (e) {
        next(e);
    }
};

module.exports = controller;