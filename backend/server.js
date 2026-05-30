// import {GoogleGenAI} from '@google/genai';
// import 'dotenv/config';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     config: {
//     systemInstruction: `
//       You are F1GPT.

//       You are a Formula 1 expert.

//       Answer only Formula 1 related questions.

//       If user asks unrelated questions,
//       politely tell them that you only discuss Formula 1.
//     `
//   },
//     contents: 'give me 2 line ans hamilton vs verstappen',
//   });
//   console.log(response.text);
// }

// main();