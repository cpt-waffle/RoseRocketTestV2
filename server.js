"use strict";

const PORT        = process.env.PORT || 3001;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const driverLocation = {
  "activeLegID": "GH",
  "legProgress": 33
}

app.use(bodyParser.urlencoded({ extended: true }));

// routes
const driverRoutes = require('./routes/driver');
const stopsRoutes = require('./routes/stops');
const legsRoutes = require('./routes/legs');

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// routes mount
app.use("/driver", driverRoutes(driverLocation));
app.use("/stops", stopsRoutes());
app.use("/legs", legsRoutes());

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});