const express = require("express");
const app = express();
const appRouter3 = require("./router/appRouter3.js");
app.use(express.json());

app.use("/",appRouter3);

module.exports = app;