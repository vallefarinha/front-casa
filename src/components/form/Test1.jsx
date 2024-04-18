import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleEditTodo = (id) => {
    setIsEditing(true);
    setEditTodoId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditInput(todoToEdit.text);
  };

  const handleUpdateTodo = () => {
    setIsEditing(false);
    setTodos(todos.map((todo) => todo.id === editTodoId ? { ...todo, text: editInput } : todo));
    setEditInput('');
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
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
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={`mb-2 ${todo.completed ? 'line-through' : ''}`} onClick={() => handleToggleTodo(todo.id)}>
            {todo.text}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <input value={editInput} onChange={(e) => setEditInput(e.target.value)} className="border p-2 rounded mr-2" />
          <button onClick={handleUpdateTodo} className="bg-green-500 text-white px-4 py-2 rounded">Update Todo</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
