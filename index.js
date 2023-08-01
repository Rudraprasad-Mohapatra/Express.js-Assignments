const app = require("./app.js"); 

const PORT = 8081;

app.listen(PORT, (req, res)=> {
    console.log(` Server listening at http://127.0.0.1:${PORT}`);
})