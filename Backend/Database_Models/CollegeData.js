import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    Institute_Name: {
        type: String,
        
    },
    Institute_city: {
        type: String,
        
    },
    Institute_State: {
        type: String,
        
    },
    Course_Name: {
        type: String,
        
    },
    Course_Stream: {
        type: String,
        
    },
    Level: {
        type: String,
        
    },
    Fee: {
        type: Number,
        
    },
    Fee_Type: {
        type: String,
        
    },
    Course_Duration: {
        type: Number,
        
    },
    Duration_Type: {
        type: String,
        
    }
});

export default mongoose.model('Course', courseSchema);


