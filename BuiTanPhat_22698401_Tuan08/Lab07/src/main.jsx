import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createStore } from "redux";
// import allReducers from "./Redux/reducers/index.jsx";
import { Provider } from "react-redux";

// const store = createStore(allReducers);

import { store } from './ReduxToolkit/Store.jsx';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
