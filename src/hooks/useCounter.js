import { useState } from "react";

// custom hook
export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);

  return [counter, { increment, decrement }];
}
