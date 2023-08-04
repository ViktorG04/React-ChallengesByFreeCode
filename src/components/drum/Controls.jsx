import React, { useContext } from "react";
import Toggle from "./Toggle";
import VolumeControl from "./VolumeControl";
import { DrumContext } from "../../pages/Drum";
import "../../pages/drum.css";

const Controls = () => {
  const { drum, setDrum } = useContext(DrumContext);
  const onHandleCheckBank = () => {
    setDrum({
      ...drum,
      bank: !drum.bank,
      sound: drum.bank ? "Heater Kit" : "Smooth Piano",
    });
  };

  const onHandleOff = () => {
    setDrum({ ...drum, power: !drum.power, sound: "" });
  };

  return (
    <div className="container_controls">
      <Toggle name="Power" checked={drum.power} onHandleChange={onHandleOff} />
      <p className="display" id="display">
        {drum.sound}
      </p>
      <VolumeControl />
      <Toggle
        name="Bank"
        checked={drum.bank}
        disabled={!drum.power}
        onHandleChange={onHandleCheckBank}
      />
    </div>
  );
};

export default Controls;
