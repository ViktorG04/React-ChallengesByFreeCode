import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "../components/calculator/Button";
import "./calculator.css";

const symbols = ["+", "-", "*", "/"];

const NUMBERS = [
  { name: "7", className: "number", id: "seven" },
  { name: "8", className: "number", id: "eight" },
  { name: "9", className: "number", id: "nine" },
  { name: "4", className: "number", id: "four" },
  { name: "5", className: "number", id: "five" },
  { name: "6", className: "number", id: "six" },
  { name: "1", className: "number", id: "one" },
  { name: "2", className: "number", id: "two" },
  { name: "3", className: "number", id: "three" },
  { name: "0", className: "zero", id: "zero" },
  { name: ".", className: "decimal", id: "decimal" },
];

function Calculator() {
  const [value, setValue] = useState(0);
  const [accumulator, setAccumulator] = useState("");

  const onHandleCatchValue = number => {
    if (value === "0") {
      return;
    }

    const containsPoint = value.toString();

    if (containsPoint.includes(".") && number === ".") {
      return;
    }

    setValue(current => (current === 0 ? number : current + number));

    if (accumulator === "=NAN") {
      return setAccumulator(number);
    }
    setAccumulator(acc => acc + number);
  };

  const onHandleOperation = symbol => {
    setValue(symbol);
    if (accumulator.includes("=")) {
      const position = accumulator.indexOf("=");
      setAccumulator(accumulator.slice(position + 1, accumulator.length));
    }

    const validate = new RegExp(/[-+*\/][-+]/);

    const isBelongs = validate.test(accumulator);

    if (isBelongs) {
      return setAccumulator(acc => acc.replace("*-", symbol));
    }

    setAccumulator(acc => acc + symbol);
  };

  const onHandleProcess = () => {
    if (symbols.includes(accumulator)) {
      setAccumulator("=NAN");
      setValue("NAN");
      return;
    }

    setValue(evaluate(accumulator));
    setAccumulator(acc => acc + "=" + evaluate(accumulator));
  };

  const onHandleClear = () => {
    setValue(0);
    setAccumulator("");
  };

  return (
    <div className="container">
      <div className="body">
        <p className="result">{accumulator}</p>
        <div id="display" className="output">
          {value}
        </div>

        <div className="body-container">
          <div className="numbers">
            <Button
              id="clear"
              className="clear"
              name="AC"
              action={() => onHandleClear()}
            />
            <Button
              id="divide"
              className="divide"
              name="/"
              action={() => onHandleOperation("/")}
            />
            {NUMBERS.map((number, index) => (
              <Button
                key={`number-${index}`}
                className={number.className}
                name={number.name}
                action={() => onHandleCatchValue(number.name)}
                id={number.id}
              />
            ))}
          </div>
          <div className="operations">
            <Button
              id="multiply"
              className="multiplication"
              name="x"
              action={() => onHandleOperation("*")}
            />
            <Button
              id="subtract"
              className="rest"
              name="-"
              action={() => onHandleOperation("-")}
            />
            <Button
              id="add"
              className="sum"
              name="+"
              action={() => onHandleOperation("+")}
            />
            <Button
              id="equals"
              className="equals"
              name="="
              action={() => onHandleProcess()}
            />
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Calculator;
