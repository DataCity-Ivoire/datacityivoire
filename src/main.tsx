import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.documentElement.classList.add("dark");
localStorage.removeItem("dci-theme");

createRoot(document.getElementById("root")!).render(<App />);
