const mongoose = require('mongoose'); //.set('debug', true);
const Meals = mongoose.model('meals');

// GET: /meals - list all the meals
const mealsList = async (req, res) => {
    Meals
        .find({}) //empty filter for all
        .exec((err, meals) => {
                if (!meals) {
                    return res  
                        .status(404)
                        .json({ "message": "meal not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(meals);
                }
        });
};

// GET: /meals/:name - returns a single meal
const mealsFindByCode = async (req, res) => {
    Meal
        .find({'name': req.params.name }) 
        .exec((err, meal) => {
                if (!meal) {
                    return res  
                        .status(404)
                        .json({ "message": "meal not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                } else {
                    return res
                        .status(200)
                        .json(meal);
                }
        });
};

//POST: /meals - add new meal
const mealsAddMeal = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Meal
                .create({
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                    (err, meal) => {
                        if (err) {
                            return res
                                .status(400) // bad request, invalid content
                                .json(err);
                        }
                        else {
                            return res
                                .status(201) // created
                                .json(meal);
                        }
                    });
        })
}

//POST: /meals - edit existing meal
const mealsUpdateMeal = async(req, res) => {
    console.log(req.body);
    getUser(req, res,
        (req, res) => {
	Meal
		.findOneAndUpdate({	'code': req.params.mealCode	}, {
			code: req.body.code,
			name: req.body.name,
			length: req.body.length,
			start: req.body.start,
			resort: req.body.resort,
			perPerson: req.body.perPerson,
			image: req.body.image,
			description: req.body.description
		}, { new: true })
		.then(meal => {
			if (!meal) {
				return res
					.status(404)
					.send({
						message: "Meal not found with code " + req.params.mealCode
					});
			}
			res.send(meal);
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res
					.status(404)
					.send({
						message: "Meal not found with code " + req.params.mealCode
					});
			}
			return res
				.status(500) // server error
				.json(err);
        });
    })
}

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
    mealsList,
    mealsFindByCode,
    mealsAddMeal,
    mealsUpdateMeal
};
