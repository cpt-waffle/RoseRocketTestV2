"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = (driverLocation) => {

  router.get("/", (req, res) => {
    console.log("driver")
    res.send({driver: driverLocation})
  });

  return router;
}