import { GoogleGenAI } from '@google/genai';

const getGemeniResponse = async (messages) => {

  const options = {
    method: "POST",
    headers: {
      "x-goog-api-key": process.env.GEMINI_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: messages
    })
  };

  try {

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      options
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.candidates[0].content.parts[0].text;

  } catch (err) {
    console.log(err);
    throw err;
  }

};

export default getGemeniResponse;