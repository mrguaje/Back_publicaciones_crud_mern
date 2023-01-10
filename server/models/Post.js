import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image:{
        url: String,
        public_id: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    state:{
        type: String,
        default: "a"
    }
})

export default mongoose.model('Post', postSchema)
