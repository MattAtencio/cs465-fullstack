const checkout = (req, res) => {
    //kept getting undefined for description var, so left out for now
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('checkout', {title: "Travlr Getaways - Checkout"});
}

module.exports = {
    checkout
}