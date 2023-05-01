import mongoose from "mongoose";

const connectToMongose = async ()=>{
   try{
    await mongoose.connect(
        "mongodb://auth-mongo-srv:27017/auth",);
   }catch(err){
     console.log(err);
     throw err;
   }
}





export default mongoose;
export {
    connectToMongose
};
