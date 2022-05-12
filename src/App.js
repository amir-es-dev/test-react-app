import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Form from "./Components/Form/Form";
import ConditionalRender from "./Components/conditinalRender/ConditionlalRender";
import MyHook from "./Components/MyHook/MyHook";
import ResizeScreen from "./Components/ResizeScreen/ResizeScreen";
import FormValidation from "./Components/FormValidation/FormValidation";
import BetterForm from "./Components/BetterForm/BetterForm";
import FormUseRef from "./Components/FormUseREf/FormUseRef";
import Father from "./Components/Father/Father";
import Father2 from "./Components/Father2/Father2";
import UseCallback from "./Components/UseCallback/UseCallback";

function App() {
  return (
    <div className="App">
      {/* <UseCallback /> */}
      {/* <Father2 /> */}
      {/* <Father /> */}
      {/* <FormUseRef /> */}
      <BetterForm />
      {/* <FormValidation /> */}
      {/* <ResizeScreen /> */}
      {/* <MyHook /> */}
      {/* <ConditionalRender /> */}
      {/* <Form /> */}
      {/* <Header />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default App;
