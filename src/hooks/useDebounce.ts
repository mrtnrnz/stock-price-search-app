import { useState, useEffect } from "react";

type UseDebounce = (inputValue: string, delay?: number) => string;

const useDebounce: UseDebounce = (inputValue, delay = 800) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    // Cleanup
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebounce;
