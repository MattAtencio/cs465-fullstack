const news = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: "Travlr Getaways - News"});
}

module.exports = {
    news
}