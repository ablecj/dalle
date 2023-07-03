import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./MongoDb/Connect.js";
import PostRoutes from './routes/PostRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/', async(req,res)=>{
    res.send('Hello from DALL-E!');
})

const startServer = async()=>{

    try {
       connectDB(process.env.MONGODB_URL); 
       app.listen(8080,()=> console.log('server has started on prot http://localhost:8080'))
    } catch (error) {
       console.log(error); 
    }

   
}

startServer();