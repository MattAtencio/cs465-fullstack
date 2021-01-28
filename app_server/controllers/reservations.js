const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

//GET reservation list view
const reservationsList = (req, res) => {
    const path = '/api/reservations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> reservationController.reservationsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderReservationsList(req, res, body);
        }
    );
};

//internal method to render the reservation list
const renderReservationsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Reservation';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        repsonseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No reservations exist in our database!';
        }
    }
    res.render('reservations',
        {
                title: pageTitle,
                reservations: responseBody,
                message
        }
    );
}

module.exports = {
    reservationsList
}