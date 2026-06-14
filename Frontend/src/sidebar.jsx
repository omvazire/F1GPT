import "./sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./myContext.jsx";
import { v1 as uuidv1 } from "uuid";
import logo from "../assets/F1-01.png";

function Sidebar() {

  const { allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrThreadId, setPrevChats } = useContext(MyContext);

  const getAllThreads = async () => {

    try {
      const response = await fetch("https://f1gpt.onrender.com/api/thread");
      const res = await response.json();

      const filteredData = res.map(thread => ({ threadId: thread.threadId, title: thread.title }));

      // console.log(filteredData);

      setAllThreads(filteredData);

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    getAllThreads();
  }, [currThreadId])


  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
  }

  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);


      try{  
        const response = await fetch(`https://f1gpt.onrender.com/api/thread/${newThreadId}`);
        const res = await response.json();
        console.log(res);
        setPrevChats(res);

        setNewChat(false);
        setReply(null);
      } catch(err){
        console.log(err);
      }
  }


const deleteThread = async (threadId) => {
  try{
    const response =await fetch(`https://f1gpt.onrender.com/api/thread/${threadId}`,{method: "DELETE"});
    const res = await response.json();
    console.log(res);

    //rerender list after delete
    setAllThreads(prev => prev.filter(thread => thread.threadId != threadId));

    if(threadId === currThreadId){
      createNewChat();
    }

  }catch(err){
    console.log(err);
  }
}

  return (
    <section className="sidebar">


      <button onClick={createNewChat}>
        <img src={logo} alt="f1 logo" className="logo" />
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </button>



      <ul className="history">
        {
          allThreads?.map((thread, idx) => (
            <li key={idx} className={thread.threadId === currThreadId ? "active" : ""} onClick={(e) => changeThread(thread.threadId)} title={thread.title}>
            {thread.title}
            <i className="fa-solid fa-trash-can" onClick={(e) => {
              e.stopPropagation(); //to stop event bubling (when delete clicked the list is also getting clicked so to fix that)
              deleteThread(thread.threadId);
            }}></i>
            </li>
          ))
        }

      </ul>


      <div className="sign">
        <p>By Om_Vazire </p>
      </div>

    </section>
  );
}

export default Sidebar;