const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8181;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/budget",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

// app.use(require('./routes/routes-api.js'));
// app.use(require('./routes/routes-html.js'));

app.listen(
    PORT,
    () => console.log(`I hope you have a wonderful day on port ${PORT}!`)
);