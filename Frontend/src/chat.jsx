import "./chat.css"
import { useContext } from "react";
import { MyContext } from "./myContext";


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
                        <p className="gptMessage">{chat.content}</p>

                        
                    }
                </div>
                
            )
        }

       
    </div>

</>
)
}


export default Chat;