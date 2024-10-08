import { useState } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { TodosProvider } from "./context/UseTodos";

const App = () => {
  const [filter, setFilter] = useState('all');

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
    <TodosProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent setFilter={setFilter} />
        <ToDoList toggleTodo={toggleTodo} />
      </div>
    </TodosProvider>
  );
};

export default App;