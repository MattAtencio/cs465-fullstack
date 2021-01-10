const fs = require('fs');
const roomType = JSON.parse(fs.readFileSync('./data/roomtype.json', 'utf8'));


const rooms = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: "Travlr Getaways - Rooms", roomType});
}

module.exports = {
    rooms
}