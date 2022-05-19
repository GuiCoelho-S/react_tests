import React, { useCallback, useState } from "react";

export const useCounter = () => {

  const [count, setCount] = useState(0);

  const increment = useCallback(
    () => setCount((prev) => prev + 1), []);

  const decrement = useCallback(
    () => setCount((prev) => prev - 1), []);

  return { count, increment, decrement }
}
