import dotenv from "dotenv"
// const dotenv = require('dotenv'); 
// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js"; 

// dotenv.config();
dotenv.config({
    path: './.env'
})

connectDB();


//effi concept
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("ERROR: " , error)
    }
})()
*/