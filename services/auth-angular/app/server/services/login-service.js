var express = require('express'),
    axios = require('axios');
require('dotenv').config();

var app = module.exports = express.Router();

app.post("/login", (req, res) => {
  console.log("Looking on /env route");
  
  axios
  .request({
    method: "GET",
    url: "/env",
    baseURL: "http://localhost:3501",
  })
  .then(response => {
    // console.log("response from " + checkedBody.baseURL);
    console.log(response.data);
    // console.log(response.data.result);
    
    res.send(response.data.result).end();
  })
  .catch(err => {
    console.log("Error during microservices request ", err);
      res.send(err).end();
    });
})

