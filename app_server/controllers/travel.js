const travel = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: "Travlr Getaways - Travel"});
}

module.exports = {
    travel
}