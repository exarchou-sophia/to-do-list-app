import ToDoItem from './ToDoItem';
import { useTodos } from "../context/UseTodos"

const ToDoList = ({ filter }) => {
    const { todos, toggleTodo } = useTodos();

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true; // For 'all', return everything
    });

    return (
        <ul>
            {filteredTodos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};

export default ToDoList;