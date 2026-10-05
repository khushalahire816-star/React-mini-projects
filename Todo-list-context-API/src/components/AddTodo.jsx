import { useContext, useRef } from "react";
import { IoBagAdd } from "react-icons/io5";
import { todoItemContext } from "../store/todo-items-store";

function AddTodo(){
  const {addNewItem} = useContext(todoItemContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = (event) =>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    
    addNewItem(todoName, dueDate);

  }

  return <div className="container text-center">
        <form className="row kg-row" onSubmit = {handleAddButtonClick}>
          <div className="col-6">
            <input type="text" ref = {todoNameElement} placeholder="Enter Todo here"/>
          </div>
          <div className="col-4">
            <input type="date" ref = {todoDateElement}/>
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button" 
            ><IoBagAdd /></button>
          </div>
        </form>
      </div>
}

export default AddTodo;