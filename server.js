require("dotenv").config()
const express = require("express");

const app = express();
const birdsController = require("./controllers/birdsController");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/angry-birds", birdsController);

app.listen(process.env.PORT, () => {
    console.log("we are live")
})