import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, [])
  
  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveData();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveData();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");  
    saveData();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveData();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 my-5 rounded-lg shadow-lg bg-gray-100">
        <div className="addtodo">
          <h3 className="text-lg font-bold ">Add a new To-Do</h3>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter your task here"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAdd}
            disabled={todo === ""}
            className=" bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300"
          >
            Save Task
          </button>
          {/* <span>
            {todo === "" && (
              <small className="text-red-500">Please enter a task</small>
            )}
          </span> */}
        </div>
      </div>
      <div className="container mx-auto p-4 my-3 rounded-lg shadow-lg bg-gray-100 h-auto">
        <div className="flex justify-between items-center my-4">
          <h3 className="text-lg font-semibold">Show Finished Tasks</h3>
          <div
            onClick={toggleFinished}
            className={`button bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300 ${
              showFinished ? "bg-green-500" : "bg-grey-500"
            } ${showFinished ? "hover:bg-green-700" : "hover:bg-grey-700"
            } ${showFinished ? "shadow-lg" : "shadow-md"
            }`}
          >
            {/* {showFinished ? "Hide" : "Show"} */}
            {showFinished ? <BiSolidHide /> :<BiSolidShow /> }
          </div>
        </div>
        <h3 className="text-lg font-bold ">Your To-Do's</h3>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-center text-lg font-bold text-gray-500">
              You're all caught up! No tasks to show
            </div>
          )}
          {todos.map((item) => {
            return ((showFinished || !item.isCompleted)&&
              <div
                key={item.id}
                className="todo flex items-center p-2 my-2 border border-gray-300 rounded-lg hover:shadow-lg transition duration-300"
              >
                <input
                  type="checkbox"
                  name={item.id}
                  id=""
                  value={item.isCompleted}
                  onChange={handleCheckbox}
                  className="mr-2 h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500 checked:bg-green-500 checked:border-transparent"
                />
                <div className="text flex-grow">
                  <h6
                    className={`text-lg font-mono ${
                      item.isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.todo}
                  </h6>
                  {/* <p className="text-sm">This is a sample task</p> */}
                </div>
                <div className="buttons flex space-x-2">
                  <div
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className="button bg-yellow-500 text-white p-2 rounded-lg cursor-pointer hover:bg-yellow-600 shadow-md hover:shadow-lg transition duration-300"
                  >
                    {/* Edit */}
                    <FaEdit />
                  </div>
                  <div
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="button bg-red-500 text-white p-2 rounded-lg cursor-pointer hover:bg-red-600 shadow-md hover:shadow-lg transition duration-300"
                  >
                    {/* Delete */}
                    <MdDelete />

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
