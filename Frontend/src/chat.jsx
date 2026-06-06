import "./chat.css"
import { useContext } from "react";
import { MyContext } from "./myContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm"
import "highlight.js/styles/atom-one-dark.css";

function Chat() {
    const{newChat, prevChats} = useContext(MyContext);
return (
<>
    {newChat && <h2>Start a new Chat !</h2>}
    <div className="chats">

        {
            prevChats?.map((chat, idx) => 
                <div className={chat.role === "user"? "userDiv" : "gptDiv"} key={idx}> 
                    {
                        chat.role === "user"? 
                        <p className="userMessage">{chat.content}</p> : 
                        <ReactMarkdown rehypePlugins={rehypeHighlight} remarkPlugins={remarkGfm}>{chat.content}</ReactMarkdown>

                        
                    }
                </div>
                
            )
        }

       
    </div>

</>
)
}


export default Chat;