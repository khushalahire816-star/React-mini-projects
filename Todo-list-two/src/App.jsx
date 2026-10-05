import Heading from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name : "Buy milk",
      duedate : "17/07/2026",
    },
    {
      name : "Go to college",
      duedate : "25/07/2026",
    },
    {
      name : "Like this video",
      duedate : "right now",
    },
  ];
 
  return (
    <center className="todo-container">
      <Heading></Heading>
      <AddTodo></AddTodo>
      <TodoItems todoItems = {todoItems}></TodoItems>
    </center>
  );
}

export default App;
