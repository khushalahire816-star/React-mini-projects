import Heading from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcome";
import { useReducer } from "react";
import { todoItemContext } from "./store/todo-items-store";
import "./App.css";

const todoItemReducer = (curTodoItem, action) =>{

  let newTodoItems = curTodoItem;
  if(action.type === "NEW_ITEM"){
    newTodoItems = [...curTodoItem, {name :action.payload.itemName,
       duedate : action.payload.itemDueDate},
    ];

  }else if(action.type === "DELETE_ITEM"){
    newTodoItems = curTodoItem.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;

}

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItems = (itemName, itemDueDate) =>{
    const newItemAction ={
      type : "NEW_ITEM",
      payload : {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItem) =>{
    const deleteItemAction ={
      type : "DELETE_ITEM",
      payload : {
        itemName : todoItem,
      }
    };
    dispatchTodoItems(deleteItemAction);
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
