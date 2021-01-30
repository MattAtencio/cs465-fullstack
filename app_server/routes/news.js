var express = require('express');
var router = express.Router();
const controller = require('../controllers/news');

/* GET home page. */
router.get('/', controller.FeaturedBlogPost);

module.exports = router;