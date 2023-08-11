import { createContext, useState } from "react";

const initialValues = { sound: "", power: true, bank: false, volume: 30 };

export const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
  const [drum, setDrum] = useState(initialValues);
  return (
    <DrumContext.Provider value={{ drum, setDrum }}>
      {children}
    </DrumContext.Provider>
  );
};
