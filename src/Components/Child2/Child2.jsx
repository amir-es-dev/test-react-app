import { forwardRef, useImperativeHandle, useState } from "react";

const Child2 = forwardRef((_, inpRef) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  useImperativeHandle(
    inpRef,
    () => ({
      getData: () => {
        return inputVal;
      },
    }),
    [inputVal]
  );

  return (
    <>
      <input value={inputVal} onChange={handleChange} />
    </>
  );
});

export default Child2;
