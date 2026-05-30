import express, { json } from "express";
import 'dotenv/config';
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log("server running on port");
    connectDB();
})

const connectDB = async() =>{
  console.log(process.env.MONGODB_URI);
  try{
    await mongoose.connect (process.env.MONGODB_URI);
    console.log("connected to mongodb succesfully 👍");
  }catch(err){
    console.log(err, "failed to connect with mongodb ❌");
  }
}

// app.post("/test", async (req, res) => {
//   try {
//     const options = {
//       method: "POST",
//       headers: {
//         "x-goog-api-key": process.env.GEMINI_API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: req.body.message
//               }
//             ]
//           }
//         ]
//       })
//     };

//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent",
//       options
//     );

//     const data = await response.json();

//     const reply =
//       data.candidates[0].content.parts[0].text;

//     res.send(reply);

//   } catch (err) {
//     console.log(err);

//     res.status(500).send("Something went wrong");
//   }
// });