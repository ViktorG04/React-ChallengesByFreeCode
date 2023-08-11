import { useContext } from "react";
import { TimeContext } from "../../context/TimeContext";

import { defaultBreak, defaultSession } from "./const";

const TimeControl = () => {
  const { setBreakTime, setSessionTime, setPlay, setReset, audioRef } =
    useContext(TimeContext);

  const onHandleReset = () => {
    setPlay(false);
    setBreakTime(defaultBreak);
    setSessionTime(defaultSession);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 500);
  };

  const onHandlePlay = () => {
    setPlay(current => !current);
  };

  return (
    <section className="timer-control">
      <button type="button" id="start_stop" onClick={onHandlePlay}>
        <i className="fas fa-play"></i>
        <i className="fas fa-pause"></i>
      </button>
      <button type="reset" id="reset" onClick={onHandleReset}>
        <i className="fas fa-sync-alt"></i>
      </button>
    </section>
  );
};

export default TimeControl;
