const express = require("express");
const app4 = express();
const appRouter4 = require("./router/appRouter4.js");

app4.use(express.json());

app4.use("/", appRouter4);

module.exports = app4;