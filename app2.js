const express = require("express");
const bodyParser = require("express");
const app2 = express();
const appRouter2 = require("./router/appRouter2.js");
app2.use(bodyParser.json());
app2.use(express.json());
app2.use(express.urlencoded({extended: true}));
app2.use("/", appRouter2);

module.exports = app2;