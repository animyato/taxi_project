import mongoose from "mongoose";

const dbConnection = () => {
    try{
        mongoose.connect("");
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
}

export default dbConnection;