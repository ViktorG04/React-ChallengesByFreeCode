import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./components/Random";
import Calculator from "./components/Calculator";
import Drum from "./components/Drum";
import { DrumProvider } from "./components/Drum";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DrumProvider>
    <Drum />
  </DrumProvider>
);
