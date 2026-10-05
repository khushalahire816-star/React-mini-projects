import Heading from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcome";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) =>{
    setTodoItems((currentValue) => {
      const newTodoItems = [...currentValue, {name :itemName,
      duedate : itemDueDate},
    ];
    return newTodoItems;
    }); 
  };

  const handleDeleteItem = (todoItem) =>{
    const newItems = todoItems.filter((item) => item.name !== todoItem );
    setTodoItems(newItems);
  };
 
  return (
    <center className="todo-container">
      <Heading></Heading>
      <AddTodo onNewItems = {handleNewItems}></AddTodo>
      <WelcomeMessage todoItems = {todoItems}></WelcomeMessage>
      <TodoItems todoItems = {todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
