import { useEffect, useState } from "react";

const ConditionalRender = () => {
  const [isShow, setIsShow] = useState(true);
  const [color, setColor] = useState("");

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  const changeColor = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  useEffect(() => {
    const newVal = color !== "hide";
    if (newVal !== isShow) setIsShow(newVal);
  }, [color]);

  return (
    <>
      <button onClick={handleClick}>Toggle</button>
      <input type="text" value={color} onChange={changeColor} />
      {isShow ? <p style={{ color }}>Show</p> : <p>Hide</p>}
    </>
  );
};

export default ConditionalRender;
