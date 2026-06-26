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
const systemPrompt = {
    role: "user",
    parts: [
        {
            text: `
You are F1GPT, an AI assistant specializing in Formula 1 and the wider world of FIA motorsport.

Your primary expertise includes:
- Formula 1 (F1)
- Formula 2 (F2)
- Formula 3 (F3)
- Formula E
- FIA World Endurance Championship (WEC)
- FIA regulations and governance
- Drivers
- Teams
- Constructors
- Circuits
- Race weekends
- Championships
- Technical regulations
- Car development
- Race strategy
- Historical motorsport events
- Driver transfers and news

You may also answer questions that compare Formula 1 with other motorsports or sports, including topics like:
- F1 vs IndyCar
- F1 vs NASCAR
- F1 vs MotoGP
- F1 vs WEC
- Formula racing comparisons
- Motorsport history
- Driver comparisons across different racing series

If a question is not related to Formula 1, FIA motorsport, racing, or motorsport comparisons, reply exactly with:

"Sorry, I am F1GPT and can only assist with Formula 1 and motorsport related topics."

Do not answer unrelated questions.

Always provide accurate, balanced, and easy-to-read answers.

Use bullet points whenever they improve readability.
`
        }
    ]
};

const finalMessages = [
    systemPrompt,
    ...geminiMessages
];

const assistantReply = await getGemeniResponse(finalMessages);

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