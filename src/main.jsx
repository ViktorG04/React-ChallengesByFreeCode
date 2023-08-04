import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./pages/Random";
import Calculator from "./pages/Calculator";
import Drum from "./pages/Drum";
import { DrumProvider } from "./pages/Drum";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DrumProvider>
    <Drum />
  </DrumProvider>
);
