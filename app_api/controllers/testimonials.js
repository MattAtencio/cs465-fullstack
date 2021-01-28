const mongoose = require('mongoose'); //.set('debug', true);
const Testimonials = mongoose.model('testimonials');

// GET: /testimonials - list all the testimonials by most recent
const testimonialsList = async (req, res) => {
    Testimonials
        .find({}) 
        .sort({"date": -1})
        .exec((err, testimonaials) => {
                if (!testimonaials) {
                    return res  
                        .status(404)
                        .json({ "message": "testimonaials not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(testimonaials);
                }
        });
};

// GET: /testimonials/:limit - get X number of testimonials, by most recent
const latestTestimonials = async (req, res) => {
    Testimonials
        .find({})
        .sort({"date": -1})
        .limit(parseInt(req.params.limit))
        .exec((err, testimonaials) => {
                if (!testimonaials) {
                    return res  
                        .status(404)
                        .json({ "message": "testimonaials2 not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(testimonaials);
                }
        });
};


module.exports = {
    testimonialsList,
    latestTestimonials
};