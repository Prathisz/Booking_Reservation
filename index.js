import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config()
const connect = async() =>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
        
    }
};
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoose disconnected!")
})

app.get("/user" , (req,res)=>{
    res.send("Hello ")
}) 




app.listen(8500 , ()=>{
    connect()
    console.log("Connected to backend!!")
})