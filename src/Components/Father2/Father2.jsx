import { useRef } from "react";
import Child2 from "../Child2/Child2";

const Father = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.getData());
  };
  return (
    <>
      <Child2 ref={inputRef} />
      <button onClick={handleClick}>submit</button>
    </>
  );
};

export default Father;
