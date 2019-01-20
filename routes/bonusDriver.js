"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = (bonusDriverLocation) => {

  router.get("/", (req, res) => {
    res.send(bonusDriverLocation);
  });

  router.put("/", (req, res) => {
    bonusDriverLocation = req.body;
    res.send(bonusDriverLocation);
  });

  return router;
}