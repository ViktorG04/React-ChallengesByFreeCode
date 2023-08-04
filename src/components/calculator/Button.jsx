import React from "react";
import "../../pages/calculator.css";

const Button = ({ className, name, action, id }) => {
  return (
    <button className={className} onClick={action} id={id}>
      {name}
    </button>
  );
};

export default Button;
