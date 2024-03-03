const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        msg:"Organisation Detected"
    });
})


module.export = route;