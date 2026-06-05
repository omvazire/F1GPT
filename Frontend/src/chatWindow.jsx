import "./chatWindow.css";
import Chat from "./chat.jsx"

function ChatWindow() {
  return (
    <div className="chatWindow">
         <div className="navbar">
            <span>F1GPT  <i class="fa-solid fa-angle-down"></i></span>

            <div className="userIconDiv">
             <span className="userIcon">  <i class="fa-solid fa-user"></i> </span> 
            </div>
          </div>


         <Chat></Chat>


         <div className="chatInput">
          <div className="inputBox">
            <input type="text" placeholder="Ask anything from F1"/>

            <div id="submit"><i class="fa-solid fa-circle-up"></i></div>
          </div>

          <p className="info">
              F1GPT can make mistakes. Check important info. See cookie preferences.
            </p>

         </div>
    </div>
  );
}

export default ChatWindow;