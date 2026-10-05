import { useContext } from "react";
import styles from "./Welcome.module.css";
import { todoItemContext } from "../store/todo-items-store";

const WelcomeMessage = () =>{
  const contextObj = useContext(todoItemContext);
  const todoItems = contextObj.todoItems;
  return (todoItems.length === 0 && <p className = {styles.welcome}>I like you all of you Guyss....</p>
  );
}

export default WelcomeMessage;