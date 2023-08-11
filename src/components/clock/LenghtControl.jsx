import React, { useContext } from "react";
import TimeLength from "./TimeLength";
import { TimeContext } from "../../context/TimeContext";

const LenghtControl = () => {
  const { breakTime, setBreakTime, sessionTime, setSessionTime, play } =
    useContext(TimeContext);

  const handleTimeChange = (timeType, operation) => {
    if (play) {
      return;
    }

    const time = timeType === "break" ? breakTime : sessionTime;

    if (operation === "increment" && time.minutes < 60) {
      setTimeType(timeType, { minutes: time.minutes + 1, seconds: 0 });
    } else if (operation === "decrement" && time.minutes > 1) {
      setTimeType(timeType, { minutes: time.minutes - 1, seconds: 0 });
    }
  };

  const setTimeType = (timeType, newTime) => {
    if (timeType === "break") {
      setBreakTime(newTime);
    } else if (timeType === "session") {
      setSessionTime(newTime);
    }
  };

  const onHandleBreakIncrement = () => handleTimeChange("break", "increment");
  const onHandleBreakDecrement = () => handleTimeChange("break", "decrement");

  const onHandleSessionIncrement = () =>
    handleTimeChange("session", "increment");
  const onHandleSessionDecrement = () =>
    handleTimeChange("session", "decrement");

  return (
    <div className="control-time">
      <TimeLength
        id="break"
        timeName="Break"
        value={breakTime.minutes}
        handleDecrement={onHandleBreakDecrement}
        handleIncrement={onHandleBreakIncrement}
      />
      <TimeLength
        id="session"
        timeName="Session"
        value={sessionTime.minutes}
        handleDecrement={onHandleSessionDecrement}
        handleIncrement={onHandleSessionIncrement}
      />
    </div>
  );
};

export default LenghtControl;
