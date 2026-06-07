import "./sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./myContext.jsx";

function Sidebar() {

  const {allThreads, setAllThreads, currThreadId} = useContext(MyContext);

  const getAllThreads = async () => {

    try{
      const response = await fetch("http://localhost:8000/api/thread");
      const res = await response.json();

      const filteredData = res.map(thread => ({threadId: thread.threadId, title: thread.title}));

      console.log(filteredData);

      setAllThreads(filteredData);

    } catch (err) {
      console.log(err);
    }

  };

  useEffect (() => {
    getAllThreads();
  }, [currThreadId])


  return (
    <section className="sidebar">
      

    <button>
      <img src="src/assets/f1logo.png" alt="f1 logo" className="logo"/>
      <span><i className="fa-solid fa-pen-to-square"></i></span>
    </button>



    <ul className="history">
      {
        allThreads?.map((thread, idx) => (
          <li key={idx}>{thread.title}</li>
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