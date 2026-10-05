import { useContext } from "react";
import { todoItemContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () =>{
  const contextObj = useContext(todoItemContext);
  const todoItems = contextObj.todoItems;

  return( 
    <div className={styles.itemsContainer}>
      {todoItems.map(item => <TodoItem key = {item.name} todoname= {item.name} tododate= {item.duedate}></TodoItem>)}
  </div>
  );
};

export default TodoItems;