const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

//GET latest news posts
const LatestNewsPosts = (req, res) => {
    const path = '/api/newsPosts/5';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.info('>> newsController.LatestNewsPosts calling ' + requestOptions.url);
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
    const path = '/api/vacationTips/5';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.info('>> newsController.LatestVacationTips calling ' + requestOptions.url);
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
const renderIndex = (req, res, latestNewsPosts, latestVacationTips) => {
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
    if (!(latestVacationTips instanceof Array)) {
        message = 'API lookup error';
        latestVacationTips = [];
    } else {
        if (!latestVacationTips.length) {
            message = 'No testimonials exist in our database!';
        }
    }

    res.render('news',
        {
                title: pageTitle,
                newsPosts: latestNewsPosts,
                vacationTips: latestVacationTips,
                message
        }
    );
}

module.exports = {
    LatestNewsPosts
}