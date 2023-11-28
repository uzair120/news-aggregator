// src/index.js

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

const root = document.getElementById("root");

const renderMethod = createRoot(root);

renderMethod.render(
  <Provider store={store}>
    <App />
  </Provider>
);
