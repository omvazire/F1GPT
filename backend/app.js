import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import dns from "dns";
import chatRoutes from "../backend/routes/chat.js"

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


app.use("/api", chatRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");

    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();

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