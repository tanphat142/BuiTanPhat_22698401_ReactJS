import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter/CounterSlice';
import todoReducer from './Todo-List/TodoSlice';
import themeReducer from './ToggleTheme/ThemeSlice';
import cartReducer from './ShoppingCart/CartSlice';
import authReducer from './Auth/AuthSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer
  },
});