import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { Chart, ArcElement, Tooltip, Legend, PieController } from "chart.js";

// Register the components
Chart.register(ArcElement, Tooltip, Legend, PieController);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
