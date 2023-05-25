import mongoose from "mongoose";

const connectToMongose = async ()=>{
   try{
    await mongoose.connect(
       process.env.MONGO_URI!);
   }catch(err){
     console.log(err);
     throw err;
   }
}





export default mongoose;
export {
    connectToMongose
};
