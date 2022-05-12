import { useCallback, useState } from "react";

const UseCallback = () => {
  const [state, setState] = useState(0);
  const [ne, setNe] = useState(10);

  console.log("a", state);

  const func = useCallback(() => {
    console.log(ne);
  }, [state]);

  const handleState = () => {
    setState((p) => p + 1);
  };

  const handleNe = () => {
    setNe((p) => p + 1);
  };
  return (
    <>
      <p>{state}</p>
      <button onClick={handleState}>handleSate</button>
      <button onClick={handleNe}>handleNe</button>
      <button onClick={func}>clg</button>
    </>
  );
};

export default UseCallback;
