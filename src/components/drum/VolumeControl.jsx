import { useContext } from "react";
import { DrumContext } from "../../context/DrumContext";
import "../../pages/drum.css";

const VolumeControl = () => {
  const { drum, setDrum } = useContext(DrumContext);

  const onHandleVolumeChange = e => {
    const level = e.target.value;
    setDrum({ ...drum, volume: level });
  };

  return (
    <div className="volume-slider">
      <input
        max="100"
        min="0"
        step="0.01"
        type="range"
        value={drum.volume}
        onChange={onHandleVolumeChange}
        disabled={!drum.power}
        title="volume control"
      />
    </div>
  );
};

export default VolumeControl;
