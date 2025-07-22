import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
   username: {
        type: String,
        required: true,
        unique: true,

   } ,
   email:{
        type: String,
        required: true,
        unique: true,
   },
   password:{
        type: String,
        required: true,
    
   },
   isVerified: {
            type: Boolean,
               default: false,
   },
   isAdmin:{
            type: Boolean,
               default: false,
   },
   forgetPasswordToken:String,
     forgetPasswordTokenExpiry: Date,
     verfyToken: String,
     verfyTokenExpiry: Date,
} ,{ timestamps: true })


export default mongoose.model('User', userSchema);