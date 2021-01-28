const fs = require('fs');
const blogPosts = JSON.parse(fs.readFileSync('./data/blogPosts.json', 'utf8'));
const testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));

const index = (req, res) => {
    res.render('index.hbs', {title: 'Travlr Getaways', blogPosts, testimonials});
}

module.exports = {
    index
}