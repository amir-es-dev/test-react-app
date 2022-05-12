import { useState } from "react";
import "./Button.css";

function Button(props) {
  const { children } = props;
  const [val, setVal] = useState(0);

  const onClick = () => {
    setVal(val + 1);
  };

  return (
    <button onClick={onClick}>
      {val} - {children}
    </button>
  );
}

export default Button;
