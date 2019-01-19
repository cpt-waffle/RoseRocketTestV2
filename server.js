"use strict";

const PORT        = process.env.PORT || 3001;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();
const cors        = require('cors');

const driverLocation = {
  "activeLegID": "FG",
  "legProgress": "33"
};

const bonusDriverLocation = undefined;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// routes
const bonusDriverRoutes = require('./routes/bonusDriver');
const driverRoutes = require('./routes/driver');
const stopsRoutes = require('./routes/stops');
const legsRoutes = require('./routes/legs');

// routes mount
app.use("/bonusDriver", bonusDriverRoutes(bonusDriverLocation))
app.use("/driver", driverRoutes(driverLocation));
app.use("/stops", stopsRoutes());
app.use("/legs", legsRoutes());

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});