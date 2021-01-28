const mongoose = require('mongoose'); //.set('debug', true);
const User = mongoose.model('users');
const Reservation = mongoose.model('reservations');


// GET: /reservations/:reservationCode - returns a single reservation
const reservationsFindByUser = async (req, res) => {
    Reservation
        .find({}) //empty filter for all
        .exec((err, reservations) => {
                if (!reservations) {
                    return res  
                        .status(404)
                        .json({ "message": "reservations not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(reservations);
                }
        });
};

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {            
      User
        .findOne({ email : req.payload.email })         
        .exec((err, user) => {
          if (!user) {
            return res
              .status(404)
              .json({"message": "User not found"});
          } else if (err) {
            console.log(err);
            return res
              .status(404)
              .json(err);
           }
          callback(req, res, user.name);                
         });
    } else {
      return res
        .status(404)
        .json({"message": "User not found"});
    }
  };

module.exports = {
    reservationsFindByUser
};