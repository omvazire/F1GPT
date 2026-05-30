import express, { json } from "express";
import 'dotenv/config';
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log("server running on port");
})

app.post("/test", async (req, res) =>{

    const options = {
        method: "POST",
        headers:{
            "x-goog-api-key": process.env.GEMINI_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "contents": [
      {
        "parts": [
          {
            "text": "Explain how f1 works in detail"
          }
        ]
      }
    ]
        })
    }

    try{
      const response = await  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", options);
      const data = await response.json();
      console.log(data);
      res.send(data);
    } catch(err){
        console.log(err)
    }
})