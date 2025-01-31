import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email:
     { type: String,
       required: true,
        unique: true },
    password: 
    { type: String },
    firstname: 
    { type: String },
    lastname:{
      type: String
    },
    state:{
      type: String,
      
    }
});

export default mongoose.model('User', UserSchema);
