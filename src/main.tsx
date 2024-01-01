import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// const [mode, setMode] = useState<string>('light');
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
