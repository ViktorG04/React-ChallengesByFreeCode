import React from "react";
const Timer = ({ time, changeActions }) => {
  const { changeTime, color } = changeActions;

  const currentTime = `${(time?.minutes || 0).toString().padStart(2, "0")}:${(
    time?.seconds || 0
  )
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="timer" style={color ? { color: "red" } : null}>
      <p id="timer-label">{changeTime ? "Session" : "Break"}</p>
      <p id="time-left">{currentTime}</p>
    </div>
  );
};

export default Timer;
