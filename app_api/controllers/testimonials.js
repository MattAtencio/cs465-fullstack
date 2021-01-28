const mongoose = require('mongoose'); //.set('debug', true);
const Testimonials = mongoose.model('testimonials');

// GET: /testimonials - list all the testimonials
const testimonialsList = async (req, res) => {
    Testimonials
        .find({}) //empty filter for all
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

// GET: /latestTestimonial - get most recent testimonial
const latestTestimonial = async (req, res) => {
    Testimonials
        .find({})
        .sort({"date": -1})
        .limit(1)
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


module.exports = {
    testimonialsList,
    latestTestimonial
};