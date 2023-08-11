import { createContext, useState, useRef } from "react";
import { defaultBreak, defaultSession } from "../components/clock/const";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [breakTime, setBreakTime] = useState(defaultBreak);
  const [sessionTime, setSessionTime] = useState(defaultSession);
  const [play, setPlay] = useState(false);
  const [reset, setReset] = useState(false);
  const audioRef = useRef(null);

  const value = {
    breakTime,
    setBreakTime,
    sessionTime,
    setSessionTime,
    play,
    setPlay,
    reset,
    setReset,
    audioRef,
  };

  return (
    <TimeContext.Provider value={value}>
      {children}
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={audioRef}
      ></audio>
    </TimeContext.Provider>
  );
};
