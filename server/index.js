const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res) =>{
    res.send("devesh hello ");
});
app.listen(port, () => {
    console.log(`running on ${port}`);
});