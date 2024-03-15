import express from "express";
import Hotel from "../models/Hotel.js";


const router =express.Router();

//create
router.post("/" ,async (req , res)=>{

    const newHotel = new Hotel(req.body)


    try{
        const savedHostel = await newHotel.save()
        res.status(200).json(savedHostel)

    }catch(err){
        res.status(500).json(err)
    }
})

//update

router.put("/:id" , async (req , res) => {
    try {
        const updatedHostel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
       
        res.status(200).json(updatedHostel);
    } catch(err) {
        res.status(500).json(err);
    }
});

//delete

router.delete("/:id" , async (req , res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
       
        res.status(200).json("hotel has been deleted");
    } catch(err) {
        res.status(500).json(err);
    }
});

//get

router.get("/:id" , async (req , res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
       
        res.status(200).json(hotel);
    } catch(err) {
        res.status(500).json(err);
    }
});

//getall
router.get("/" , async (req , res) => {
    try {
        const hotels = await Hotel.find(req.params.id);
       
        res.status(200).json(hotels);
    } catch(err) {
        res.status(500).json(err);
    }
})



export default router