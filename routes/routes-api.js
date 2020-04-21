const db = require('../models');

const router = require('express').Router();

router.get(
    '/workouts',
    (req, res) => {
        db.Workout.find({})
            .then(
                data => {
                    res.json(data);
                }
            ).catch(
                ({ message }) => {
                    // console.log(message);
                }
            )
    }
);

router.post(
    '/workouts',
    (req, res) => {
        console.log(req.body, 'hello');
    }
);

router.put(
    '/workouts/:id',
    (req, res) => {
        const id = req.params.id;
        
        // console.log(id)
       

    }
);

router.get(
    '/workouts/range',
    (req, res) => {

    }
);


module.exports = router;