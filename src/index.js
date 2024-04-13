import dotenv from "dotenv"
import { app } from "./app.js";
// const dotenv = require('dotenv'); 
// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js"; 

// dotenv.config();
dotenv.config({
    path: './.env'
})

//async method return promise so here we can use .then() and .catch method
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})


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