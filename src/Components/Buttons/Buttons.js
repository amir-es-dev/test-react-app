import "./Buttons.css";
import Button from "../Button/Button";

function Buttons() {
  return (
    <div className="buttons">
      <Button text={"Google Search"} />
      <Button text={"I'm Feeling Lucky"} />
      {/* <button>Google Search</button>
      <button>I'm Feeling Lucky</button> */}
    </div>
  );
}

export default Buttons;
