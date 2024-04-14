import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,//cloudinary url
            required: true,
        },
        thumbnail:{
            type: String,//cloudinary url
            required: true, 
        },
        tiltle:{
            type: String,
            required: true, 
        },
        description:{
            type: String,
            required: true, 
        },
        duration:{
            type: Number,//we will get duration from cloudinary
            required: true, 
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,//since it's owner will be user
            ref: "User"
        }
    },
    { timestamps: true}
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema)