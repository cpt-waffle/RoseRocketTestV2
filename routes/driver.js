"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data');

module.exports = (driverLocation) => {

  router.get("/", (req, res) => {
    res.send({driver: driverLocation});
  });

  router.put("/", (req, res) => {
    const {driverActiveLeg, legProgress} = req.body
    driverLocation = { activeLegID: driverActiveLeg, legProgress: legProgress }
    res.send(driverLocation);
  });

  return router;
}