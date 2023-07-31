const express = req('express');
const app = express();

app.listen(PORT, (req, res)=> {
    console.log(` Server listening at http://127.0.0.1:${PORT}`);
})