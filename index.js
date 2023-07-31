const express = require('express');
const PORT = 5500;
const app = express();


app.listen(PORT, (req, res)=> {
    console.log(` Server listening at http://127.0.0.1:${PORT}`);
})