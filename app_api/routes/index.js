const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');
const reservationsController = require('../controllers/reservations');
const testimonialsController = require('../controllers/testimonials');
const blogPostsController = require('../controllers/blogPosts');

router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

router  
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList)   

router
    .route('/meals')
    .get(mealsController.mealsList) 

router
    .route('/meals/:name')
    .get(mealsController.mealsFindByCode)
    .put(auth, mealsController.mealsUpdateMeal);

router
    .route('/reservations')
    .get(reservationsController.reservationsFindByUser);
    
router
    .route('/testimonials')
    .get(testimonialsController.testimonialsList)

router
    .route('/latestTestimonial')
    .get(testimonialsController.latestTestimonial)    

router
    .route('/blogPosts')
    .get(blogPostsController.blogPostsList)    

module.exports = router;