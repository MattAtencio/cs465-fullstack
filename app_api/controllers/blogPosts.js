const mongoose = require('mongoose');
const BlogPosts = mongoose.model('blogposts');

// GET: /blogPosts - list all blog posts
const blogPostsList = async (req, res) => {
    BlogPosts
        .find({}) 
        .sort({"date": -1})
        .exec((err, blogPosts) => {
                if (!blogPosts) {
                    return res  
                        .status(404)
                        .json({ "message": "blogPosts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(blogPosts);
                }
        });
};

// GET: /vacationTips - list all blog posts with category of vacation tips
const vacationTipsList = async (req, res) => {
    BlogPosts
        .find({category: "Vacation Tips"}) 
        .sort({"date": -1})
        .exec((err, blogPosts) => {
                if (!blogPosts) {
                    return res  
                        .status(404)
                        .json({ "message": "blogPosts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(blogPosts);
                }
        });
};

// GET: /vacationTips/:limit - get X number of vacqation tips, by most recent
const latestVacationTips = async (req, res) => {
    BlogPosts
        .find({category: "Vacation Tips"}) 
        .sort({"date": -1})
        .limit(parseInt(req.params.limit))
        .exec((err, blogPosts) => {
                if (!blogPosts) {
                    return res  
                        .status(404)
                        .json({ "message": "blogPosts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(blogPosts);
                }
        });
};

// GET: /newsPosts - list all blog posts with category of news
const newsPostsList = async (req, res) => {
    BlogPosts
        .find({category: "News"}) 
        .sort({"date": -1})
        .exec((err, blogPosts) => {
                if (!blogPosts) {
                    return res  
                        .status(404)
                        .json({ "message": "blogPosts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(blogPosts);
                }
        });
};

// GET: /newsPosts/:limit - get X number of news posts, by most recent
const latestNewsPosts = async (req, res) => {
    BlogPosts
        .find({category: "News"}) 
        .sort({"date": -1})
        .limit(parseInt(req.params.limit))
        .exec((err, blogPosts) => {
                if (!blogPosts) {
                    return res  
                        .status(404)
                        .json({ "message": "blogPosts not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(blogPosts);
                }
        });
};


module.exports = {
    blogPostsList,
    vacationTipsList,
    latestVacationTips,
    newsPostsList,
    latestNewsPosts
};