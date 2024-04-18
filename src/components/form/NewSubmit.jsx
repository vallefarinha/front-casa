import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="p-4">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-2 rounded mr-2" />
      <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded">Add Todo</button>
      <select value={filter} onChange={handleFilterChange} className="ml-2">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
      <ul className="mt-4">
        {filteredTodos.map((todo, index) => (
          <li key={index} className={`mb-2 ${todo.completed ? 'line-through' : ''}`} onClick={() => handleToggleTodo(index)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
