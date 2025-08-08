const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    content: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true,
        enum: [ 'friendRequest', 'comment' ]  
        // Later, we can also add Post notifications (Future Scope)
        // For e.g. Your connection has sent a new Post. (Notifies about post of only of your connection.)
    },

    isRead: {
        type: Boolean,
        default: false
    },

    postId: {
        type: String,
        default: ""
    }
}, {timestamps: true});


const NotificationModel = mongoose.model('notification', NotificationSchema);
module.exports = NotificationModel;