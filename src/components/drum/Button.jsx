import { useContext, useEffect, useState, useRef } from "react";
import { DrumContext } from "../../context/DrumContext";
import "../../pages/drum.css";

const Button = ({ sound }) => {
  const { drum, setDrum } = useContext(DrumContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const buttonRef = useRef(null);
  const audioRef = useRef(null);

  const soundName = drum.bank ? sound.sound2 : sound.sound1;

  useEffect(() => {
    const onHandleKeyPress = e => {
      if (sound.name === e.key.toUpperCase()) {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", onHandleKeyPress);
    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, []);

  const onHandleClick = () => {
    if (!drum.power) {
      return;
    }

    audioRef.current.volume = drum.volume / 100;
    audioRef.current.play();

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);

    setDrum({ ...drum, sound: soundName });
  };

  return (
    <button
      type="button"
      className={`drum-pad ${isButtonClicked ? "clicked" : ""}`}
      id={soundName}
      onClick={onHandleClick}
      ref={buttonRef}
    >
      <audio
        className="clip"
        id={sound.name}
        src={drum.bank ? sound.link2 : sound.link1}
        ref={audioRef}
      ></audio>
      {sound.name}
    </button>
  );
};

export default Button;
