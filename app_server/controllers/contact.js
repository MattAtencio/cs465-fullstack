const contact = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - Contact';
    res.render('contact', {title: "Travlr Getaways - Contact"});
}

module.exports = {
    contact
}