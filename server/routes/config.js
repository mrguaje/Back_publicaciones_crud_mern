import  dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI  || "mongodb+srv://asanchez:A1590878@cluster0.1gyfy1r.mongodb.net/pixies"
export const PORT = process.env.PORT  || 4000 