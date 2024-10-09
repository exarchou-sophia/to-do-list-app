import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const TodosProvider = props => {
    const [todos, setTodos] = useState([]);

    const toggleTodo = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    return (
        <TodosContext.Provider value={{ todos, setTodos, toggleTodo }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export const useTodos = () => {
    return useContext(TodosContext);
}