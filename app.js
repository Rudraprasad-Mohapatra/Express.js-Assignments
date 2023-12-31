const express = require('express');
const app = express();
const appRouter = require("./router/appRouter.js");

app.use(express.json())
app.use(express.urlencoded({extended: true}));

let counter = 0;
app.use("/",appRouter);

module.exports = app;