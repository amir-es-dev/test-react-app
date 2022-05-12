import { useRef, useState } from "react";
import Child from "../Child/Child";

const Father = () => {
  const [state, setState] = useState(0);
  const inputRef = useRef();
  console.log("a", state);

  const handleClick = () => {
    console.log(inputRef, inputRef.current.value);
  };
  return (
    <>
      <p>{state}</p>
      <Child setState={setState} ref={inputRef} />
      <button onClick={handleClick}>submit</button>
    </>
  );
};

export default Father;
