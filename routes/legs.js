"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = () => {

  router.get("/", (req, res) => {
    res.send({legs: data.legs})
  });

  return router;
}