import React from "react";
import { createRoot } from "react-dom/client";
import "../static/tailwind.css";

const test = (
  <div>
    <h2 className="text-3xl text-white">Options page </h2>
    <h1>HAPPY HALLOWEEN</h1>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
