import { express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//defining limit for getting json data
app.use(express.urlencoded({extended: true, limit: "16kb"}))//to read url and get data from that
app.use(express.static("public"))//To store files in our local folder (folder name: public)
app.use(cookieParser)//To set and access user's browser cookie from server
 

export {app}