import { Type } from "@google/genai";
import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
    role: {
        Type: String,
        enum: ["user", "assistant"],
        required: true
    },
    content: {
        Type:String,
        required: true
    },
    timestamp: {
        Type: Date,
        default: Date.now
    }
});


const threadSchema = new mongoose.Schema({
    threadId:{
        Type: String,
        required: true,
        unique: true
    },
    title:{
        Type: String,
        default: "New chat"
    },
    messages: [messageSchema],
    createdAt:{
        Type: Date,
        default: Date.now
    },
    updatedAt: {
        Type: Date,
        default: Date.now
    }
});


export default mongoose.model("Thread", threadSchema);