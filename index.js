// Q1 is app.js, Q2 is app2.js, Q3 is app3.js, Q4 is app4.js

// Please start the server by the command "npm start" and test the urls as per mentioned in the questions.

const app = require("./app.js");
const app2 = require("./app2.js");
const app3 = require("./app3.js");
const app4 = require("./app4.js");


app.listen(8051, (req, res) => {
    console.log(` Server1 listening at http://127.0.0.1:8051`);
});

app2.listen(8056, (req, res) => {
    console.log(` Server2 listening at http://127.0.0.1:8056`);
});

app3.listen(8061, (req, res) => {
    console.log(` Server3 listening at http://127.0.0.1:8061`);
});

app4.listen(8066, (req, res) => {
    console.log(` Server4 listening at http://127.0.0.1:8066`);
});
