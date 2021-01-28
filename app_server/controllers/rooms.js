const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

//GET rooms list view
const roomsList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> roomsController.roomsList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    );
};

//internal method to render the rooms list
const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways - Rooms';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        repsonseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms exist in our database!';
        }
    }
    res.render('rooms',
        {
                title: pageTitle,
                rooms: responseBody,
                message
        }
    );
}

module.exports = {
    roomsList
}