import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();




const app=express()

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