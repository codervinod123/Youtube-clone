const express=require("express");
const router=express.Router();

require("../DB/connection");
const User=require("../models/userSchema");


router.post("/register",async(req,res)=>{
      
     try {

        const {name,email,phone,password,cpassword}=req.body;
        const user=new User({name,email,phone,password,cpassword});
        user.save();
        res.status(201).json({message:"done bro"});

     } catch (error) {
        return res.status(400).json(`Some error occured can't send data to database ${error}`);
     }

})

module.exports=router;
