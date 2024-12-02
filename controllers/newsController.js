const asyncHandler = require('express-async-handler');
const News = require('../models/news');

const getNews = asyncHandler(async (req, res) => {
    const allNews = await News.find();
    res.status(200).json(allNews);
});

const updateSingleNews = asyncHandler(async (req, res) => {
    const newsId = News.findById(req.params.id);
    if(!newsId){
        res.status(404);
        throw new Error("News ID not found")
    }
    const singleNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(singleNews);
});

const postNews = asyncHandler(async (req, res) => {
    const { name, content } = req.body;
    if(!name || !content){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const createNews = await News.create({name, content});
    res.status(201).json(createNews);
});


const getSingleNews = asyncHandler(async(req, res) => {
    const getOneNews = await News.findById(req.params.id);
    if(!getOneNews){
        res.status(404);
        throw new Error("News with this ID does not exist")
    }
    res.status(200).json(getOneNews);
});


const deleteSingleNews = asyncHandler(async(req, res) => {
    const newsDel = await News.findByIdAndDelete(req.params.id);
    if(!newsDel){
        res.status(404);
        //throw new Error("No id present");
    }
    res.status(200).json(newsDel);
});

module.exports = {getNews, getSingleNews, deleteSingleNews, updateSingleNews, postNews};