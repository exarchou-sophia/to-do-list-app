import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const TodosProvider = props => {
    const [todos, setTodos] = useState([]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export const useTodos = () => {
    return useContext(TodosContext);
}