import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemContext } from "../store/todo-items-store";

function TodoItem({todoname, tododate}){
  const {deleteItem} = useContext(todoItemContext);
  
  return <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            {todoname}
          </div> 
          <div className="col-4">
            {tododate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick = {() =>deleteItem(todoname)}><MdDelete /></button>
          </div>
        </div>
      </div>
}

export default TodoItem;