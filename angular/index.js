const express = require("express");

const path = require("path");
const PORT  = 4200;
const HOST = 'localhost';

const app = express();

app.use("/",express.static(path.join(__dirname,'movies-app')));


app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'movies-app','index.html'));
});


app.listen(PORT,HOST,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});