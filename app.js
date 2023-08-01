const express = require('express');
const app = express();
const appRouter = require("./router/appRouter.js");

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use("/",appRouter);

module.exports = app;