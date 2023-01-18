import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Root from "./components/root";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
