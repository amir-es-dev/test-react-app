import { forwardRef } from "react";

const Child = forwardRef(({ setState }, inpRef) => {
  const handleClick = () => {
    setState((p) => p + 1);
  };
  return (
    <>
      <input ref={inpRef} />
      <div onClick={handleClick}>click</div>
    </>
  );
});

export default Child;
