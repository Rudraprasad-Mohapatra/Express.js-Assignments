const express = require("express");
const appRouter3 = express.Router();
const { homePage, aboutPage, contactPage } = require("../controller/appController3");
appRouter3.get("/", homePage);
appRouter3.get("/about", aboutPage);
appRouter3.get("/contact", contactPage);
module.exports = appRouter3;