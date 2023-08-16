import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./pages/Random";
import Calculator from "./pages/Calculator";
import Drum from "./pages/Drum";
import Clock from "./pages/Clock";
import Markdown from "./pages/Markdown";
import { DrumProvider } from "./context/DrumContext";
import { TimeProvider } from "./context/TimeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<Markdown />);
