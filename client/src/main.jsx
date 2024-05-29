import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3001";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
