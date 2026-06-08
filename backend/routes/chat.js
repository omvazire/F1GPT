import express from "express";
import Thread from "../models/thread.js";
import { error } from "console";
import thread from "../models/thread.js";
import getGemeniResponse from "../utils/gemeni.js";

const router = express.Router();

//test
router.post("/test", async (req, res) => {
    try {
        const thread = new Thread({
            threadId: "abcd",
            title: "verstappen"
        });

        const response = await thread.save();
        res.send(response);


    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "failed to save info" })
    }
});

//get all threads
router.get("/thread", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ updatedAt: -1 });
        //in decending order
        res.json(threads);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to fetch threads" });
    }
});


router.get("/thread/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try {
        const thread = await Thread.findOne({ threadId });

        if (!thread) {
            return res.status(404).json({ error: "thread is not found" })
        }
        res.json(thread.messages);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to fetch threads" });
    }
});

router.delete("/thread/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try {
        const deleteThread = await Thread.findOneAndDelete({ threadId });

        if (!deleteThread) {
            res.status(404).json({ error: "thread could not be deleted" });
        }

        res.status(200).json({ success: "thread deleted succesfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "failed to delete thread" });
    }
});

router.post("/chat", async (req, res) => {
    console.log("CHAT HIT");
    const { threadId, message } = req.body;

    if (!threadId || !message) {
        return res.status(400).json({ error: "missing required fields" });
    }
    try {
        let thread = await Thread.findOne({ threadId });

        if (!thread) {
            //create new thread
            thread = new Thread({
                threadId,
                title: message,
                messages: [{ role: "user", content: message }]
            });
        } else {
            thread.messages.push({ role: "user", content: message });
        }

        const geminiMessages = thread.messages.map(msg => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [
                {
                    text: msg.content
                }]
        }));

        const assistantReply = await getGemeniResponse(geminiMessages);

        thread.messages.push({ role: "assistant", content: assistantReply });
        thread.updatedAt = new Date();

        await thread.save();
        res.json({ reply: assistantReply });


    } catch (err) {
        console.log(err);

        return res.status(500).json({
            error: err.message
        });
    }
});

export default router;