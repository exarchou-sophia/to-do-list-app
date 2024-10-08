import ToDoItem from './ToDoItem';
import { useTodos } from "../context/UseTodos"

const ToDoList = ({ toggleTodo }) => {
    const { todos } = useTodos();

    return (
        <ul>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};

export default ToDoList;