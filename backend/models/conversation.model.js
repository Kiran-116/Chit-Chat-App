import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [], 
        },
    ], 

    // Created at, Updated At => message.createdAt: 15:30
}, {timestamps: true})

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;