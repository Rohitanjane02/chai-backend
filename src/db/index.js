import mongoose from "mongoose";
import {DB_NAME} from '../constant.js'


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection ERROR ", error)
        process.exit(1)
    }
}

//after creating exporting the function in order to use in index.js
export default connectDB;