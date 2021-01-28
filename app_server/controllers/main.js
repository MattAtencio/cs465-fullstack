const index = (req, res) => {
    res.render('index.hbs', {title: 'Travlr Getaways'});
}

module.exports = {
    index
}