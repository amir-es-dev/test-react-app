import Google from "../Google/Google";
import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";
import Text from "../Text/Text";
import "./Content.css";

function Content() {
  return (
    <div className="main">
      <Google />
      <Input />
      <Buttons />
      <Text />
    </div>
  );
}

export default Content;
