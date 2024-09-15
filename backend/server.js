import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDb from './db/connectToMongoDb.js';
import {app, server} from './socket/socket.js';
import path from 'path'
dotenv.config();
const PORT=process.env.PORT;
const __dirname=path.resolve()
server.listen(PORT,() => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`)
});
app.use(cookieParser());
app.use(express.json()); 
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

