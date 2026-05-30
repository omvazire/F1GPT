import {GoogleGenAI} from '@google/genai';

const getGemeniResponse = async(message) => {
    
    const options = {
      method: "POST",
      headers: {
        "x-goog-api-key": process.env.GEMINI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      })
    };

    try {
        const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent",
      options
    );

    const data = await response.json();

    const reply =
      data.candidates[0].content.parts[0].text;

    return reply;

  } catch (err) {
    console.log(err);

  }
}

export default getGemeniResponse;