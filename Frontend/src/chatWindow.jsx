import "./chatWindow.css";
import Chat from "./chat.jsx"
import { MyContext } from "./myContext.jsx";
import { useContext, useState, useEffect } from "react";
import { PulseLoader } from "react-spinners"

function ChatWindow() {

  const { prompt, setPrompt, reply, setReply, currThreadId, setCurrThreadId, prevChats, setPrevChats } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const getReply = async () => {
    setLoading(true);
    console.log("message", prompt, "threadId", currThreadId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: prompt,
        threadId: currThreadId
      })
    };

    try {
      const response = await fetch("http://localhost:8000/api/chat", options);
      const res = await response.json();
      console.log(res);
      setReply(res.reply);

    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  //append new chats to previous chats
  useEffect(() => {
    if (prompt && reply) {
      setPrevChats(prevChats => (
        [...prevChats, {
          role: "user",
          content: prompt
        }, {
          role: "assistant",
          content: reply
        }]
      ));
    }

    setPrompt("");

  }, [reply]);


  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>F1GPT  <i className="fa-solid fa-angle-down"></i></span>

        <div className="userIconDiv">
          <span className="userIcon">  <i className="fa-solid fa-user"></i> </span>
        </div>
      </div>


      <Chat></Chat>

      <PulseLoader color="red" loading={loading}></PulseLoader>


      <div className="chatInput">
        <div className="inputBox">
          <input type="text" placeholder="Ask anything related to F1" value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''} />


          <div id="submit" onClick={getReply}><i className="fa-solid fa-circle-up"></i></div>
        </div>

        <p className="info">
          F1GPT can make mistakes. Check important info. See cookie preferences.
        </p>

      </div>
    </div>
  );
}

export default ChatWindow;