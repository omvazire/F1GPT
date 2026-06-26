````markdown
# F1GPT

F1GPT is an AI-powered full-stack web application built for Formula 1 and motorsport enthusiasts. It allows users to ask questions related to Formula 1, Formula 2, Formula 3, Formula E, WEC, FIA regulations, drivers, teams, race weekends, championships, technical analysis, and motorsport comparisons using Google's Gemini AI.

The main goal of this project was to understand how to integrate a Large Language Model (LLM) into a full-stack application while learning backend development, API integration, database management, deployment, and prompt engineering.

## Live Demo

https://f1gpt-1.onrender.com/

---

## Features

- Ask questions related to Formula 1 and the wider world of motorsport.
- AI-generated responses using Google Gemini API.
- Stores conversation history in MongoDB.
- Continue previous conversations.
- Delete previous conversations.
- Markdown formatted AI responses.
- Word-by-word response rendering for a better chat experience.
- Custom Formula 1 inspired user interface.
- Responsive design.
- Fully deployed on Render.

---

## Technologies Used

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

## Project Structure

```
F1GPT
│
├── Backend
│   ├── models
│   ├── routes
│   ├── utils
│   ├── app.js
│   └── ...
│
├── Frontend
│   ├── src
│   ├── public
│   ├── assets
│   └── ...
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/omvazire/F1GPT.git
```

Move into the project directory.

```bash
cd F1GPT
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd Backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file and add the following environment variables.

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

Start the backend server.

```bash
npm start
```

---

## Frontend Setup

Navigate to the frontend folder.

```bash
cd Frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

---

## What I Learned

This project helped me gain hands-on experience with:

- Full-stack application development
- REST API development
- Google Gemini API integration
- Prompt engineering
- MongoDB database management
- React state management
- Backend and frontend communication
- Markdown rendering
- Deployment using Render
- Monitoring deployed applications with UptimeRobot

---

## Current Limitations

- No user authentication (Login/Signup).
- Shared chat history since authentication has not been implemented.
- No user-specific conversation storage.
- No token or account management.

These features can be added in future updates.

---

## Future Improvements

- User Login and Signup
- Individual chat history for every user
- Conversation search
- Streaming AI responses
- Better prompt optimization
- More motorsport categories
- User profiles
- Performance optimization

---

## Author

Om Vazire

GitHub: https://github.com/omvazire

LinkedIn: https://www.linkedin.com/in/omvazire/
````
