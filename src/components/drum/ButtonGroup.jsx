import React from "react";
import Button from "./Button";
import "../../pages/drum.css";

const ButtonGroup = ({ sounds }) => {
  return (
    <div className="container_buttons">
      {sounds.map((sound, index) => (
        <Button key={index} sound={sound} />
      ))}
    </div>
  );
};

export default ButtonGroup;
