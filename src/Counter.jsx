import React from "react";
import { number } from "prop-types";
import { useState } from "react";

export default function Counter({ initialValue = 0, step = 1 }) {
  // TODO: begin with another
  // TODO: inc/dec by another number
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button onClick={decrement}>-{step}</button>
      <button onClick={increment}>+{step}</button>
    </React.Fragment>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
