import { Fragment, useState } from "react";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";

function App() {
  const [formData, setFormData] = useState("");
  const [cutString, setCutString] = useState([]);
  const [toggleAnimation, setToggleAnimation] = useState("");

  return (
    <Fragment>
      <InputContainer
        setCutString={setCutString}
        formData={formData}
        setFormData={setFormData}
        setToggleAnimation={setToggleAnimation}
      />
      <OutputContainer
        cutString={cutString}
        formData={formData}
        toggleAnimation={toggleAnimation}
      />
    </Fragment>
  );
}

export default App;
