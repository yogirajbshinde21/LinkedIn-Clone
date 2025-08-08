const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type:String,
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type: String,
        // Not mandatory, because Login through Google doesn't require password to login
    },
    f_name: {
        type: String,
        default: ""
    },
    headline: {
        type:String,
        default: ""
    },
    curr_company: {
        type: String,
        default: ""
    },
    curr_location: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_lSNw7Ee7u6J7SWu5Ku6BP6H3kMcOI9TFw&s",
    },
    cover_pic: {
        type: String,
        default: "https://res.cloudinary.com/dctxpfz1i/image/upload/v1754665174/linkedin_cover_pic_caauix.png"
    },
    about: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: [],
    },

    experience: [
        {
            designation: {
                type: String,
            },
            company_name: {
                type: String,
            },
            duration: {
                type: String,
            },
            location: {
                type: String,
            },
        }
    ],

    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],

    pending_friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],

    resume: {
        type: String,
    },




}, {timestamps: true});

const userModel = mongoose.model('user', UserSchema);
module.exports = userModel;