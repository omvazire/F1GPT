import express from "express";
import Thread from "../models/thread.js";
import { error } from "console";
import thread from "../models/thread.js";

const router = express.Router();

//test
router.post("/test", async(req, res) => {
    try{
        const thread = new Thread({
            threadId: "xyz",
            title: "hello world"
        });

       const response =  await thread.save();
       res.send(response);


    }catch(err){
        console.log(err)
        res.status(500).json({err: "failed to save info"})
    }
});

//get all threads
router.get("/thread", async(req, res) => {
    try{
        const threads = await Thread.find({}).sort({updatedAt: -1});
        //in decending order
        res.json(threads);

    }catch(err){
        console.log(err);
        res.status[500].json({error: "failed to fetch threads"});
    }
});


router.get("/thread/:threadId", async (req, res) => {
    const {threadId} = req.params;
    
    try{
     const thread = await Thread.findOne({threadId});

     if(!thread){
        res.status[404].json({error: "thread is not found"})
     }
     res.json(thread.messages);

    }catch(err){
        console.log(err);
        res.status[500].json({error: "failed to fetch threads"});
    }
});

router.delete("/thread/:threadId", async (req, res) => {
    const {threadId} = req.params;

    try{
     const deleteThread = await Thread.findOneAndDelete({threadId});

     if(!deleteThread){
        res.status(404).json({error: "thread could not be deleted"});
     }

       res.status(200).json({success: "thread deleted succesfully"});

    }catch(err){
        console.log(err);
        res.status[500].json({error: "failed to delete thread"});
    }
});

export default router;