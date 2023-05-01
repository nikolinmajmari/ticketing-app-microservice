import mongoose from "mongoose";
import PasswordHasher from "../services/password_hasher";

/// interface describing user attrs 
interface UserAttrs{
    email: string;
    password: string;
}

/// interface describing user properties 
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:UserAttrs):UserDoc;
}

// inerface describing properties of user document 
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true,
    }
},{
    toJSON:{
        transform(doc,ret){
            delete ret.password;
            ret.id = doc._id;
            delete ret._id;
            //delete ret.__v;
        },
        versionKey: false,
    }
});

userSchema.pre("save",async function(done){
    if(this.isModified("password")){
        const hashed = await PasswordHasher.toHash(this.get("password"));
        this.set("password",hashed);
    }
    await done();
});



const User = mongoose.model<UserDoc,UserModel>("User",userSchema);
User.build = (attr:UserAttrs)=>{
    return new User(attr);
}

export {User};