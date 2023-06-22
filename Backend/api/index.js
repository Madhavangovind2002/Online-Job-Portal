import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app =express();


const connect = async () =>{ 
   try{
       mongoose.connect("mongodb://127.0.0.1/test",
       {useNewUrlParser: true,
       useUnifiedTopology: true});
      console.log("Connected to mongoDB")
   }
   catch(error){
       throw error;
   }
};


mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB Disconnected!")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB Connected")
})


app.get("/",(req,res)=>{
    res.send("hello first Request!")
})

//middleware




app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage =err.meassage || "Something went Wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    }); 
});

app.listen(3001,()=>{
    connect()
    console.log(" Connected to the application!")
})