import express from "express";


const router =express.Router();


router.get("/",(req,res)=>{
    res.send("this is from auth endpoint")
})


export default router