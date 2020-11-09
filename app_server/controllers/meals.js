const meals = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: "Travlr Getaways - Meals"});
}

module.exports = {
    meals
}