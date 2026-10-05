import { createContext } from "react";
import TodoItems from "../components/TodoItems";

export const todoItemContext = createContext({
  TodoItems :[],
  addNewItem : () => {},
  deleteItem : () => {},

});