const express = require("express");
const router = express.Router();

const users =[
    {email:"alice@wxample.com",password:"alice123"},
    {email:"bob@example.com",password:"bob123"},
    {email:"charlie@example.com",password:"charlie123"},
];

router.post("/user",async(req,res)=>{
    try{
        const user = await user.create(req.body);
        res.status(201).json({message:"user created"});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

router.get("/users",async(req,res)=>{
    try{
        const users = await users.find();
        res.json(users);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get("/user/:id",async(req,res)=>{
    try{
        const user = await user.findById(req.params.id);
        if(!user) return res.status(401).json({message:"user not found"});
        res.json(user);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

router.put("/updateduser/:id",async(req,res)=>{
    try{
        const updateduser = await updateduser.findByIdAndUpdate(req.body,req.params.id,{new:true});
        if(!updateduser) return res.status(401).json({message:"email not found"});
        res.json({message:"user updated"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.delete("/deleteduser/:id",async(req,res)=>{
    try{
        const deleteduser = await deleteduser.findByIdAndDelete(req.params.id);
        if(!deleteduser) return res.status(401).json({message:"email not found"});
        res.json({message:"user deleted successfully",user});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

module.exports = router;