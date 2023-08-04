import "../../pages/drum.css";

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

export default Toggle;
