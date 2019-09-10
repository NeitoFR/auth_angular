var express = require('express');
require('dotenv').config();

var app = module.exports = express.Router();

app.post("/login", (req, res) => {
    res.status(200).send("Hello "+ (req.body.usernameInput || "no one")).end();
})