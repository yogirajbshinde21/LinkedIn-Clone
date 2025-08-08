const mongoose = require('mongoose');

// For conversation, atleast 2 members are necessary. So, we are using Array
const ConversationSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, {timestamps: true});

const ConversationModel = mongoose.model('conversation', ConversationSchema);
module.exports = ConversationModel;