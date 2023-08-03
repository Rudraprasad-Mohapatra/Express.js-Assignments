const app = require("./app.js");
const app2 = require("./app2.js");

app.listen(8051, (req, res) => {
    console.log(` Server1 listening at http://127.0.0.1:8051`);
});
app2.listen(8056, (req, res) => {
    console.log(` Server2 listening at http://127.0.0.1:8056`);
});