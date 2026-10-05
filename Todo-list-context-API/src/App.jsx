import Heading from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcome";
import { useState } from "react";
import { todoItemContext } from "./store/todo-items-store";
import "./App.css";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItems = (itemName, itemDueDate) =>{
    setTodoItems((currentValue) => {
      const newTodoItems = [...currentValue, {name :itemName,
      duedate : itemDueDate},
    ];
    return newTodoItems;
    }); 
  };

  const deleteItem = (todoItem) =>{
    const newItems = todoItems.filter((item) => item.name !== todoItem );
    setTodoItems(newItems);
  };

 
  return (
    <todoItemContext.Provider value ={{todoItems : todoItems,
      addNewItem: addNewItems,
      deleteItem : deleteItem,
    }}>
      <center className="todo-container">
        <Heading></Heading>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center> 
    </todoItemContext.Provider>
  );
}

export default App;
