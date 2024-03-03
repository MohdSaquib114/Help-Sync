const express = require("express");
const volunteer = require("./volunteer");
const organisation = require("./organisation");
const route = express.Router();

route.use("/volunteer", volunteer);
route.use("/organisation", organisation)

module.export = route;