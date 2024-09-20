import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
dotenv.config();




const app=express();
app.use(express.json());

app.use(cookieParser());

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>(console.log('DB CONNECTED SUCCESSFULLY')))
.catch((error)=>{
    console.log('DB CONECTION FAILED');
    console.log(error)
    process.exit(1);
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);

app.use("/api/users",userRouter)
app.use("/api/auth",authRouter)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});