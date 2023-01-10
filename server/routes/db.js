import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js"

mongoose.set('strictQuery', false)

export async function connectDB() {
    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log('conected to mongod' )
    } catch (error) {
        console.error(error)
    }
}

