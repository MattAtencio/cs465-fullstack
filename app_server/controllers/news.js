const fs = require('fs');
const blogPosts = JSON.parse(fs.readFileSync('./data/blogPosts.json', 'utf8'));

const news = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: "Travlr Getaways - News", blogPosts});
}

module.exports = {
    news
}