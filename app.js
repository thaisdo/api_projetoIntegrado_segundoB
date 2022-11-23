const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");

const app = express();

mongoose.connect(config.url)
    .then(app.listen(config.porta, () => {
        console.log("API is ON!");
    }))
    .catch(error => {
        console.log("API is OFF", error.message);
    })