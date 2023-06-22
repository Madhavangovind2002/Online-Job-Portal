import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     number:{
      type:String,
      required:true,
   },
     eqfication:{
        type:String,
        required:true,
     },
     experience:{
        type:String,
        required:true,
     },
     mail:{
        type:String,
        required:true,
     },
     gitaccount:{
      type:String,
      required:true,
   },
   linkedin:{
      type:String,
      required:true,
   }
}); 

export default mongoose.model("Room",RoomSchema)