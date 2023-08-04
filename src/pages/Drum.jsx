import React, { useState, createContext, useContext } from "react";
import { ButtonGroup, Controls } from "../components/drum";
import "./drum.css";

const sounds = [
  {
    name: "Q",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    sound1: "Heater 1",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    sound2: "Chord 1",
  },
  {
    name: "W",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    sound1: "Heater 2",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    sound2: "Chord 2",
  },
  {
    name: "E",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    sound1: "Heater 3",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    sound2: "Chord 3",
  },
  {
    name: "A",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    sound1: "Heater 4",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    sound2: "Shaker",
  },
  {
    name: "S",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    sound1: "Clap",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    sound2: "Open HH",
  },
  {
    name: "D",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    sound1: "Open HH",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    sound2: "Closed HH",
  },
  {
    name: "Z",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    sound1: "Kick n' Hat",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    sound2: "Punchy Kick",
  },
  {
    name: "X",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    sound1: "Kick",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    sound2: "Side Stick",
  },
  {
    name: "C",
    link1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    sound1: "Closed HH",
    link2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    sound2: "Snare",
  },
];

const initialValues = { sound: "", power: true, bank: false, volume: 30 };

export const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
  const [drum, setDrum] = useState(initialValues);
  return (
    <DrumContext.Provider value={{ drum, setDrum }}>
      {children}
    </DrumContext.Provider>
  );
};

const Drum = () => {
  return (
    <div className="container-drum">
      <div className="container" id="drum-machine">
        <ButtonGroup sounds={sounds} />
        <Controls />
      </div>
    </div>
  );
};

export default Drum;
