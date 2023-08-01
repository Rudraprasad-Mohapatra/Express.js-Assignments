const express = require("express");
const { welcome, PDofMen, PDofWomen, PNF } = require("../controller/appController.js");
const appRouter = express.Router();

appRouter.get("/",welcome);
appRouter.get("/men",PDofMen);
appRouter.get("/women",PDofWomen);
appRouter.get("/other",PNF);

module.exports = appRouter;