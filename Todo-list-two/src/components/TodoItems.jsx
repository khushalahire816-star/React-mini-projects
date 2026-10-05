import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems}) =>{
  return( 
    <div className={styles.itemsContainer}>
      {todoItems.map(item => <TodoItem todoname= {item.name} tododate= {item.duedate}></TodoItem>)}
  </div>
  );
};

export default TodoItems;