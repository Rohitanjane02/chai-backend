import mongoose, {Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,//used for removing white spaces from string
            index: true,//it will make some field easier to search like username
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,//used for removing white spaces from string
        },
        fullName: {
            type: String,
            required: true, 
            trim: true,//used for removing white spaces from string
            index: true
        },
        avatar: {
            type: String, //cloudinary url
            required: true,
        },
        coverImage: {
            type: String,//cloudinary url
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
         ],
         password: {
            type: String,
            required: [true, 'Password is required']
         },
         refreshToken:{
            type: String
         }
    }, {timestamps: true}
)

//{LOGIN FOR PASSWORD ENCRYPT AND DE-CRYPT}
//pre->it will be called before when the data is being stored in mongoDB
//since it is middleware so we have to take next as a parameter
//here i have to use this keyword so it maindatary that we have to use function signature 
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();//if password not modified than return
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)//it will return true or false
}


//LOGIC FOR JWT TOKEN
userSchema.methods.generateAccessToken = function(){
    //defining the payload after that it will return token
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    //defining the payload after that it will return token
    //it required only id
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)