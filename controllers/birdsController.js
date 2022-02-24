const express = require("express");

const router = express.Router();
const birds = require("../models/angryBirdsData");


router.get("/", (req, res) => {
    console.log("success")
    res.send(birds);
})

router.post("/", (req, res) => {
    console.log("post route");
    console.log(req.body);
    birds.push(req.body);
    res.send("received post request");
})

router.get("/:id", (req, res) => {
    res.send(birds[req.params.id - 1]);
})

router.delete("/:id", (req, res) => {
    birds.splice(req.params.id - 1, 1);
    res.send("deleted bird");
})

router.put("/:id", (req, res) => {
    birds[req.params.id] = req.body
    res.send(birds[req.params.id]);
})

module.exports = router; 