import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { TodosProvider } from "./context/UseTodos";

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <TodosProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent setFilter={setFilter} />
        <ToDoList filter={filter} />
      </div>
    </TodosProvider>
  );
};

export default App;