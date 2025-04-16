import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-6">Toggle Theme</h1>
      <p className="text-lg mb-4">Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;