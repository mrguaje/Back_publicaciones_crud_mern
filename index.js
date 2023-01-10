import {connectDB} from './server/routes/db.js'
import { PORT } from './server/routes/config.js'
import express from 'express'
import fileUpload from 'express-fileupload'
import postsRoutes from './server/routes/posts.routes.js'
import cors from 'cors';

const app = express()

//midelwares
app.use(cors());
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//rutas
app.use(postsRoutes)


connectDB()
app.listen(PORT)
console.log('Server running in port ', PORT)
