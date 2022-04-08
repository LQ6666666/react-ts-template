import { createRoot } from "react-dom/client";

import "@/assets/css/global.css";

import App from "./App";

console.log(process.env);

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
