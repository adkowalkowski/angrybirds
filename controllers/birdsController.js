const express = require("express");

const router = express.Router();
const birds = require("../models/angryBirdsData");


router.get("/", (req, res) => {
    console.log("success")
    res.send(birds);
})

module.exports = router; 