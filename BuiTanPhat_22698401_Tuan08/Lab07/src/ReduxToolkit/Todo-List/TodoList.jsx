import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './TodoSlice';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">To-do List</h1>
      
      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2 h-5 w-5"
              />
              <span
                className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;