const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routerHtml =require('./routes/routes-html');
const routerApi = require('./routes/routes-api');
const db = require('./models');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8181;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ['application/json'] }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(parser.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitness",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

// db.Workout.find().then((e) => {
//     console.log(e)
// })

// app.use(require('./routes/routes-api.js'));
// app.use(require('./routes/routes-html.js'));

app.use('/',routerHtml);
app.use('/api',routerApi);

app.listen(
    PORT,
    () => console.log(`I hope you have a wonderful day on port ${PORT}!`)
);