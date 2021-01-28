const mongoose = require('mongoose').set('debug', true);
const BlogPosts = mongoose.model('blogposts');

// GET: /blogPosts - list all blog posts
const blogPostsList = async (req, res) => {
    BlogPosts
        .find({}) //empty filter for all
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
    blogPostsList
};