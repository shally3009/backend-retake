const express = require("express");
const app = express();
const router = require("./userController");

const port = 4000;
app.use("/api",router);

app.listen(port,async(req,res)=>{
    try{
        console.log(`Server is running on port ${port}`);
    }
    catch(error){
        console.log("Error in index.js",error);
    }
});

app.get("/",(req,res)=>{
    res.send("Hello World!")
});