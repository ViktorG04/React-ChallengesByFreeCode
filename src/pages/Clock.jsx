import React from "react";
import { Timer, TimeControl, LenghtControl } from "../components/clock";
import useTime from "../hook/useTime";
import "./clock.css";
export const Clock = () => {
  const { time, changeActions } = useTime();

  return (
    <div className="container-clock">
      <main>
        <h1>25 + 5 Clock</h1>
        <LenghtControl />
        <Timer time={time} changeActions={changeActions} />
        <TimeControl />
      </main>
    </div>
  );
};

export default Clock;
