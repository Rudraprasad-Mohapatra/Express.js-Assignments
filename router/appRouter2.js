const express = require("express");
const appRouter2 = express.Router();
const {showCount, increment, decrement} = require("../controller/appController2.js");
appRouter2.get("/",showCount);
appRouter2.post("/increment", increment);
appRouter2.post("/decrement", decrement);
module.exports = appRouter2;