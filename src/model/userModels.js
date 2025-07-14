import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        requirerd: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        reuired: [true, 'Please enter password' ],

    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExipery: String,
    


})

const user = mongoose.model.users || mongoose.model 
('users', userSchema)

export default user;