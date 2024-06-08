const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Users default route")
})

app.listen(3000, ()=>{
    console.log("Up and running users");
})