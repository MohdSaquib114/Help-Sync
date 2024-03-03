const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        msg:"Volunteer Detected"
    });
})

module.export = route;