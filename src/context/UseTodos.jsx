import { createContext, useContext, useReducer } from "react";
import { toDosReducer } from "./ToDosReducer";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    const loadedTodos = localStorage.getItem("todos")
    const todoList = loadedTodos ? JSON.parse(loadedTodos) : []

    const [todos, dispatch] = useReducer(toDosReducer, todoList);

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
}

export const useTodos = () => useContext(TodosContext);
