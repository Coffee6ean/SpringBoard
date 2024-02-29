import React, { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue, parseFunction = JSON.parse) => {
  const [state, setState] = useState(() => {
    const storedValue = parseFunction(window.localStorage.getItem(key) || defaultValue);
    return storedValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
