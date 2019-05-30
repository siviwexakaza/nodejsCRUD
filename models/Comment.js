const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    message_id:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Comment',CommentSchema);