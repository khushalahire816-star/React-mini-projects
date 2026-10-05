import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems, onDeleteClick}) =>{
  return( 
    <div className={styles.itemsContainer}>
      {todoItems.map(item => <TodoItem key = {item.name} todoname= {item.name} tododate= {item.duedate} onDeleteClick = {onDeleteClick}></TodoItem>)}
  </div>
  );
};

export default TodoItems;