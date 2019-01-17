"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = () => {

  router.get("/", (req, res) => {
    res.send({stops: data.stops})
  });

  return router;
}