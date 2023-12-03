import React from "react";
import { createRoot } from "react-dom/client";
import "../static/tailwind.css";
import FetchImages from "./fetchData";

const EXT_APP = (
  <div>
    <h2 className="text-3xl text-white text-center">HAPPY HALLOWEEN</h2>
    {/* <img src="pumpkin1.jpg" alt="" />
    <img src="pumpkin2.jpg" alt="" /> */}
    <FetchImages />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(EXT_APP);
