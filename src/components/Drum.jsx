import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
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

const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
  const [drum, setDrum] = useState({ sound: "", power: true });
  const audioRef = useRef(null);

  return (
    <DrumContext.Provider value={{ audioRef, drum, setDrum }}>
      {children}
      <audio ref={audioRef}></audio>
    </DrumContext.Provider>
  );
};

const Button = ({ sound, bank }) => {
  const { audioRef, drum, setDrum } = useContext(DrumContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onHandleKeyPress = (e) => {
      if (sound.name === e.key.toUpperCase()) {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", onHandleKeyPress);
    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, []);

  function onHandleClick() {
    if (!drum.power) {
      return;
    }
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
    audioRef.current.src = bank ? sound.link2 : sound.link1;
    audioRef.current.play();
    setDrum({ ...drum, sound: bank ? sound.sound2 : sound.sound1 });
  }

  return (
    <button
      type="button"
      className="drum-pad"
      /* className={ isButtonClicked ? "clicked" : ""} */
      onClick={onHandleClick}
      id={sound.name}
      ref={buttonRef}
    >
      {sound.name}
    </button>
  );
};

const Toggle = ({ name, checked, disabled, onHandleChange }) => {
  return (
    <div className="toggle">
      <p>{name}</p>
      <label className="container_controls_toggle">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onHandleChange}
          title={`checked-${name}`}
        />
        <span className="container_controls_toggle--span"></span>
      </label>
    </div>
  );
};

const VolumeControl = () => {
  const [volume, setVolume] = useState(30);
  const { audioRef, drum } = useContext(DrumContext);

  const onHandleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <div className="volume-slider">
      <input
        max="100"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={onHandleVolumeChange}
        disabled={!drum.power}
        title="volume control"
      />
    </div>
  );
};

const Drum = () => {
  const [bank, setBank] = useState(false); //false-->Heater Kit  true -->Smooth Piano

  const { drum, setDrum } = useContext(DrumContext);

  const onHandleCheckBank = () => {
    setBank((bank) => !bank);
    setDrum({ ...drum, sound: bank ? "Heater Kit" : "Smooth Piano" });
  };

  const onHandleOff = () => {
    setDrum({ power: !drum.power, sound: "" });
  };

  return (
    <div className="container-drum">
      <div className="container" id="drum-machine">
        <div className="container_buttons">
          {sounds.map((sound, index) => (
            <Button key={index} sound={sound} bank={bank} />
          ))}
        </div>

        <div className="container_controls">
          <Toggle
            name="Power"
            checked={drum.power}
            onHandleChange={onHandleOff}
          />
          <p className="display" id="display">
            {drum.sound}
          </p>
          <VolumeControl />
          <Toggle
            name="Bank"
            checked={bank}
            disabled={!drum.power}
            onHandleChange={onHandleCheckBank}
          />
        </div>
      </div>
    </div>
  );
};

export default Drum;
