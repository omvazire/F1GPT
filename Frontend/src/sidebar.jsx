import "./sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      

    <button>
      <img src="src/assets/f1logo.png" alt="f1 logo" />
      <i className="fa-solid fa-pen-to-square"></i>
    </button>



    <ul className="history">
      <li>history1</li>
      <li>history2</li>
      <li>history3</li>
    </ul>


    <div className="sign">
      <p>By Om_Vazire &hearts:</p>
    </div>

    </section>
  );
}

export default Sidebar;