const express = require("express");
const appRouter4 = express.Router();
const appController4 = require("../controller/appController4.js");
appRouter4.get("/random", appController4);

module.exports = appRouter4;