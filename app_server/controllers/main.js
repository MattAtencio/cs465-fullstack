const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

//GET latest news posts
const LatestNewsPosts = (req, res) => {
    const path = '/api/newsPosts/2';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.info('>> mainController.LatestNewsPosts calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            LatestTestimonials(req, res, body);
        }
    );
};

//GET latest testimonials
const LatestTestimonials = (req, res, latestNewsPosts) => {
    const path = '/api/testimonials/1';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.info('>> mainController.LatestTestimonials calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderIndex(req, res, latestNewsPosts, body);
        }
    );
};

//internal method to render the meals list
const renderIndex = (req, res, latestNewsPosts, latestTestimonials) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Meals';
    
    //check for errors on news posts
    if (!(latestNewsPosts instanceof Array)) {
        message = 'API lookup error';
        latestNewsPosts = [];
    } else {
        if (!latestNewsPosts.length) {
            message = 'No news posts exist in our database!';
        }
    }

    //check for errors on testimonials
    if (!(latestTestimonials instanceof Array)) {
        message = 'API lookup error';
        latestTestimonials = [];
    } else {
        if (!latestTestimonials.length) {
            message = 'No testimonials exist in our database!';
        }
    }

    res.render('index',
        {
                title: pageTitle,
                blogPosts: latestNewsPosts,
                testimonials: latestTestimonials,
                message
        }
    );
}

module.exports = {
    LatestNewsPosts
}