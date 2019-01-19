"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = (bonusDriverLocation) => {

  router.get("/", (req, res) => {
    res.send({bonusDriver: bonusDriverLocation});
  });

  router.put("/", (req, res) => {
    console.log(req.body);
  });

  return router;
}