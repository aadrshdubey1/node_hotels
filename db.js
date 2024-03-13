const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config();


// const mongoURI ='mongodb://127.0.0.1:27017/hotel'
const mongoURI = "mongodb+srv://AadrshDubey:aadrsh123@cluster0.qqpd4zc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectToMongo=async()=>{
    try {
        await mongoose.connect(mongoURI)
    console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to MongoDb",error)
    }
    
    
}
 

module.exports=connectToMongo;

