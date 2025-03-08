import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/Card";
import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Todo from "./components/todo";

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  const btnRef = useRef(0);
  const [showBtn, setshowBtn] = useState(false);
  {
    /* Conditional rendering */
  }
  const [todos, setTodos] = useState([
    { title: "todo1", desc: "todo1 desc" },
    { title: "todo2", desc: "todo2 desc" },
    { title: "todo3", desc: "todo3 desc" },
  ]);

  // useEffect()'s gets run two times in development mode due to 'StrictMode' in main.jsx
  
  //Run on every render
  useEffect(() => {
    // alert("Welcome (every render)");
  });

  //Run on first render
  useEffect(() => {
    // alert("Welcome (first render)");
  }, []);

  // //Run on action render
  useEffect(() => {
    a.current = a.current + 1;
    console.log(a.current);
    // alert(`Welcome to counter, a= ${a.current}`);
    btnRef.current.style.backgroundColor = "red";
  }, [count]);

  const handleClickEvent = () => {
    alert("Event Handle Button Clicked");
  };
  const handleHoverEvent = () => {
    alert("Event Handle Button HOVERED");
  };

  const [name, setName] = useState("Sarthak");
  const [form, setForm] = useState({email:"",phone:""})
  const handleInputEvent = (e) => {
    setName(e.target.value);
    setForm({...form, [e.target.name]:e.target.value}); 
    console.log(form);
  };

  return (
    <>
      <Navbar color={"Blue-" + "Red"} />
      cross page data rendering---
      <div className="cards">
        <Card title="Card1 Title" description="Card 1 Description" />
        <Card title="Card2 Title" description="Card 2 Description" />
        <Card title="Card3 Title" description="Card 3 Description" />
      </div>
      <div className="given">
        <div className="card">
          <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
       
      </div>
      <button
        onClick={() => {
          btnRef.current.style.display = "none";
        }}>See magic
      </button>
      <br />

      Conditional rendering ----
      <br />
      <button onClick={() => {
          setshowBtn(!showBtn);
        }}>condition</button>
      {/* {showBtn ? <button>Hidden</button> : ""} */}
      {showBtn && <button>Hidden</button>}
      <br />

      Rendering List ----
      {todos.map((todo) => {
        return <Todo key={todo.title} todo={todo} />;
      })}
      Event Handling ----
      <br />
      <button className="eventHandling" onClick={handleClickEvent}>
        EVENT
      </button>
      <span className="eventHandling" onMouseEnter={handleHoverEvent}>
        EVENT2
      </span>
      <br />
      Single--
      <input
        className="eventHandling"
        type="text"
        value={name}
        onChange={handleInputEvent}
      />
      <br />
      Multiple(collection)--
      <input
        className="eventHandling"
        type="text"
        name={form.email}
        onChange={handleInputEvent}
      />
      <input
        className="eventHandling"
        type="text"
        name={form.phone}
        onChange={handleInputEvent}
      />



      <div className="space" style={{ height: "100px" }}></div>
      <Footer />
    </>
  );
}

export default App;
