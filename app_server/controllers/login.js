const login = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('login', {title: "Travlr Getaways - Login"});
}

module.exports = {
    login
}