const rooms = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: "Travlr Getaways - Rooms"});
}

module.exports = {
    rooms
}