
import mongoose from "mongoose";


const FileSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },

    ProfilePicture: {
        type: String,
        required: true,
    }
});




const userTests = new mongoose.Schema({
    Test_Name: {
        type: String,
    },

    Test_Result: {
        type: String,
    },

    imageUrl:{
        type: String,
    },

    resultImageUrl :{
        type: String,
    }
});



const UserSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },

    username:{
        type: String,
        unique: true,
        required: true,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },
    
    gender:{
        type: String,
        required : true,
    },

    address: {
        type: String,
        required: true,
    },

   contact: {
    type: String,
    required: true,
   },

   dob:{
    type: String,
    required: true,
   },
   
    files:[FileSchema],
    Tests:[userTests],
});



const User = mongoose.model('User', UserSchema);

export {User};