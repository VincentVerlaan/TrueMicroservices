const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Restaurants default route")
})

app.listen(3001, ()=>{
    console.log("Up and running restaurants");
})