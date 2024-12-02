const express = require('express');
const router = express.Router();
const { getNews, 
    getSingleNews, 
    deleteSingleNews, 
    updateSingleNews, 
    postNews} = require('../controllers/newsController');

router.route("/").get(getNews)
router.route("/").post(postNews);
router.route("/:id").get(getSingleNews).delete(deleteSingleNews).put(updateSingleNews);

module.exports = router;
