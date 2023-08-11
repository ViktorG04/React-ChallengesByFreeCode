const TimeLength = ({
  id,
  timeName,
  value,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div>
      <p id={`${id}-label`}>{timeName} Length</p>
      <div className="length">
        <button type="button" id={`${id}-decrement`} onClick={handleDecrement}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <p id={`${id}-length`}>{value}</p>
        <button type="button" id={`${id}-increment`} onClick={handleIncrement}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default TimeLength;
