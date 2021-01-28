const mongoose = require('mongoose'); //.set('debug', true);
const Rooms = mongoose.model('rooms');

// GET: /rooms - list all the rooms
const roomsList = async (req, res) => {
    Rooms
        .find({}) //empty filter for all
        .exec((err, rooms) => {
                if (!rooms) {
                    return res  
                        .status(404)
                        .json({ "message": "room not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(rooms);
                }
        });
};


module.exports = {
    roomsList
};