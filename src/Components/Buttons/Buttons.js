import "./Buttons.css";
import Button from "../Button/Button";
import { useState } from "react";

function Buttons() {
  const arr = [
    { id: 0, text: "Google Search" },
    { id: 1, text: "I'm Feeling Lucky" },
  ];
  const [val, func] = useState(arr);

  const addNew = () => {
    func([...val, { id: val.length, text: `asd${val.length}` }]);
  };

  return (
    <div className="buttons">
      <button onClick={addNew}>add new</button>
      {val.map((el) => (
        <Button key={el.id}>
          <p>{el.text}</p>
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
