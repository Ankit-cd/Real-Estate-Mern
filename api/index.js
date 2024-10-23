import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listingRoute.js';
import cors from 'cors';
import path from 'path';
dotenv.config();
const port = process.env.PORT || 4000;



mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>(console.log('DB CONNECTED SUCCESSFULLY')))
.catch((error)=>{
    console.log('DB CONECTION FAILED');
    console.log(error)
    process.exit(1);
});

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());




app.listen(port,()=>{
    console.log('Server is running on port 3000');
}
);

app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error' ;
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});