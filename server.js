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