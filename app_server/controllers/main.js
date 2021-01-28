//hard coded data constants
const fs = require('fs');
const blogPosts = JSON.parse(fs.readFileSync('./data/blogPosts.json', 'utf8'));

//api constants
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

//GET most recent testimonial
const latestTestimonial = (req, res) => {
    const path = '/api/latestTestimonial';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> testimonialsController.latestTestimonial  calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderIndex(req, res, body);
        }
    );
};

//internal method to render the index
const renderIndex = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways' ;
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        repsonseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No testimonials exist in our database!';
        }
    }
    res.render('index',
        {
                title: pageTitle,
                testimonials: responseBody,
                message,
                blogPosts
        }
    );
}

module.exports = {
    latestTestimonial
}

