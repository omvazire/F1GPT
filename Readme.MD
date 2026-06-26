````markdown
# 🏁 F1GPT

> **An AI-powered Formula 1 & Motorsport chatbot built using the MERN Stack and Google Gemini API.**

F1GPT is a full-stack AI web application that allows users to ask questions about Formula 1 and the wider world of FIA motorsport. The project combines modern full-stack development with Generative AI to deliver an interactive motorsport assistant.

## 🌐 Live Demo

🔗 https://f1gpt-1.onrender.com/

---

## ✨ Features

- 🏎️ Ask questions related to Formula 1 and motorsport
- 🤖 AI-powered responses using Google Gemini API
- 💬 Continue previous conversations
- 📝 Chat history stored in MongoDB
- 🗑️ Delete old conversations
- 📖 Markdown formatted AI responses
- ⚡ Word-by-word response rendering
- 🎨 Custom Formula 1 themed UI
- 📱 Responsive interface
- 🚀 Fully deployed using Render

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS
- React Markdown
- Highlight.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### AI
- Google Gemini API

### Deployment
- Render

---

## 📂 Project Structure

```text
F1GPT/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── ...
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── assets/
│   └── ...
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/omvazire/F1GPT.git
```

### Install dependencies

Backend

```bash
cd Backend
npm install
```

Frontend

```bash
cd Frontend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

### Run the Backend

```bash
cd Backend
npm start
```

### Run the Frontend

```bash
cd Frontend
npm run dev
```

---

## 🎯 What I Learned

While building F1GPT, I gained practical experience with:

- Full-stack application development
- Google Gemini API integration
- Prompt Engineering
- REST API development
- MongoDB database management
- React state management
- Backend and frontend communication
- Deployment using Render
- Uptime monitoring

---

## 📌 Current Limitations

- No user authentication (Login/Signup)
- Shared chat history (single database)
- No token/account management

These features are intentionally left for future updates as the primary goal of this project was learning AI integration in a full-stack application.

---

## 🔮 Future Improvements

- User Authentication
- Personal Chat History
- User Profiles
- Better AI Prompt Controls
- Streaming Responses
- Conversation Search
- Dark/Light Theme
- Additional Motorsport Categories

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Om Vazire**
```
