const ToDoItem = ({ todo, dispatch }) => {
    return (
        <li className='flex items-center mb-2'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className='mr-2'
            />
            {todo.text}
        </li>
    );
};

export default ToDoItem;