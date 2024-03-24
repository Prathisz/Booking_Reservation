import express from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifytoken.js";

const router =express.Router();

router.get("/checkauthentication" , verifyToken ,(req,res,next)=>{
    res.send("Hello user , You are Logged in")
})

router.get("/checkuser/:id" , verifyUser ,(req,res,next)=>{
    res.send("Hello user , You are Logged in and yoiu can deete u r account")
})

//update

router.put("/:id" , updateUser);

//delete

router.delete("/:id" , deleteUser);

//get

router.get("/:id" , getUser);

//getall
router.get("/" , getUsers);



export default router