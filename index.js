const express = require("express")
const mongoose = require("mongoose")
const app = express();


const url = "mongodb+srv://emmanuelgodwin558:Youngemmy@cluster0.ydxr6zv.mongodb.net/?retryWrites=true&w=majority"

// const url = process.env.MONGODB_PASS 


async function connect () {
    // we are using async because we don't know how long it will take to connect

    try{
        await mongoose.connect(url);
        console.log("connected to MongoDB");
    } catch(error){
        console.log(error)
    }
}
connect();

app.listen(4000, () => {
    console.log("Server is starting on port 4000")
});