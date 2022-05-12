import { useRef, Fragment } from "react";
import classes from "./InputContainer.module.css";
import logo from "../images/lyft.webp";

const URL = "http://localhost:8000";

const InputContainer = (props) => {
  const { setCutString, formData, setFormData, setToggleAnimation } = props;

  const userInputRef = useRef();

  const onFormChange = (e) => {
    setFormData(userInputRef.current.value.toUpperCase());
  };

  const onFormSubmit = (e, formData) => {
    e.preventDefault();
    getCutString(formData);
    setToggleAnimation("classes.char");
    userInputRef.current.value = "";
  };

  async function getCutString() {
    const res = await fetch(`${URL}/test`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: formData }),
    });

    const data = await res.json();
    setCutString(data);
    userInputRef.current.value = "";
  }

  const resetter = () => {
    userInputRef.current.value = "";
    setFormData("");
    setCutString("");
    setToggleAnimation("");
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <p>Hello, </p>
        <img src={logo} alt="Lyft logo" className={classes.logo} />
        <p className={classes.headerEnd}>!</p>
      </div>
      <div className={classes.inputContainer}>
        <h3>Input a string to get every third character back:</h3>

        <form>
          <input
            type="text"
            ref={userInputRef}
            onChange={onFormChange}
            placeholder="Enter string here..."
            className={classes.input}
          />
        </form>
        <div className={classes.btnContainer}>
          <button onClick={onFormSubmit} className={classes.btn}>
            Cut String
          </button>
          <button onClick={resetter} className={classes.btn}>
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default InputContainer;
