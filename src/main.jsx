import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { TodoProvider } from "./context/TodoContext";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TodoProvider>,
);
