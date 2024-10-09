import ToDoItem from './ToDoItem';
import { useTodos } from "../context/UseTodos"
import { useEffect } from 'react';

const ToDoList = ({ filter }) => {
    const { todos, dispatch } = useTodos();

    // useEffect(() => {
    //     const storedToDos = localStorage.getItem("todos");
    //     storedToDos &&
    //         dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: JSON.parse(storedToDos) });
    // }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    return (
        <ul>
            {filteredTodos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
};

export default ToDoList;