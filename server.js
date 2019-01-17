"use strict";

const PORT        = process.env.PORT || 3001;
const express     = require("express");
const app         = express();

const driverLocation = {
  "activeLegID": "FG",
  "legProgress": "33"
}

// routes
const stopsRoutes = require('./routes/stops');
const legsRoutes = require('./routes/legs');

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// routes mount
app.use("/stops", stopsRoutes());
app.use("/legs", legsRoutes());


app.get("/", (req, res) => {
  console.log('test2')
  res.send({status: 'success'});
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});