const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: "Travlr Getaways - Travel", trips});

}

module.exports = {
    travel
}