import { useState, useEffect } from "react";

//Defining our hook with useEffect

const useWindowSize = () => {
  const [winSize, setWinSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWinSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return winSize;
};

const ResizeScreen = () => {
  //use our customize hook in 2 way

  const { width, height } = useWindowSize();
  console.log("width:", width, "height:", height);

  //OR
  const winSize = useWindowSize();
  console.log(winSize);

  return <></>;
};

export default ResizeScreen;
