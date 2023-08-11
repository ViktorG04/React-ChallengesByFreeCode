import { useState, useEffect, useContext } from "react";
import { actions, defaultSession } from "../components/clock/const";
import { TimeContext } from "../context/TimeContext";

const useTime = () => {
  const [changeActions, setChangeActions] = useState(actions);
  const [time, setTime] = useState(defaultSession);

  const { breakTime, sessionTime, play, reset, audioRef } =
    useContext(TimeContext);

  useEffect(() => {
    if (changeActions.changeTime) {
      setTime(sessionTime);
    } else {
      setTime(breakTime);
    }
  }, [changeActions.changeTime, breakTime, sessionTime]);

  useEffect(() => {
    setTime(defaultSession);
    setChangeActions(actions);
  }, [reset]);

  const changeTime = () => {
    if (changeActions.changeTime) {
      setChangeActions({ color: false, changeTime: false });
      return;
    }
    setChangeActions({ color: false, changeTime: true });
    return;
  };

  useEffect(() => {
    if (!play) {
      return;
    }

    const timer = setInterval(() => {
      if (time.seconds > 0) {
        return setTime({ ...time, seconds: time.seconds - 1 });
      }

      if (time.seconds === 0) {
        setTime({ minutes: time.minutes - 1, seconds: 59 });

        if (time.minutes === 1) {
          return setChangeActions({ ...changeActions, color: true });
        }
        if (time.minutes === 0) {
          audioRef.current.play();
          changeTime();
          clearInterval(timer);
          return;
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, play]);

  return { time, changeActions };
};

export default useTime;
