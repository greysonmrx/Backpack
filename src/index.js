import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import katex from "katex";
import "katex/dist/katex.min.css";

window.katex = katex;

ReactDOM.render(<App />, document.getElementById("root"));
