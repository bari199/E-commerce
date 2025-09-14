import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import { connect } from 'mongoose'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

//App Config
const app = express() 
const port = process.env.PORT|| 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

//api emdpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)



app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>
    console.log('Server started on port : '+port))
