const db = require('../models');

module.exports = app => {
    app.get(
        '/api/workouts',
        (req,res) => {
            db.Workout.find({})
                .then(
                    data => {
                        res.send(data);
                    }
                ).catch(
                    ({message}) => {
                        console.log(message);
                    }
                )
        }
    );

    app.post(
        '/api/workouts',
        (req,res) => {
            const id = req.params.id;
            console.log(req.body)
        }
    );

    app.put(
        '/api/workouts/:id',
        (req,res) => {

        }
    );

    app.get(
        '/api/workouts/range',
        (req,res) => {

        }
    );
}