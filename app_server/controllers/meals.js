const fs = require('fs');
const dishes = JSON.parse(fs.readFileSync('./data/dishes.json', 'utf8'));

const meals = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: "Travlr Getaways - Meals", dishes});
}

module.exports = {
    meals
}