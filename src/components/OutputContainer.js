import classes from "./OutputContainer.module.css";

const OutputContainer = (props) => {
  const { cutString, formData, toggleAnimation } = props;
  
  const inputArr = formData.replace(/\s+/g, "").split("");
  let outputArr = cutString.toString().split("");

  return (
    formData.length > 0 ? (<div className={classes.container}>
      <div>
        {formData.length > 0 ? <h3>You input: </h3> : ''}
        <div className={classes.inputSpans}>
          {inputArr.map((char, idx) => (
            <span
              key={idx}
              className={toggleAnimation ? classes.char : classes.charHolder}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      {toggleAnimation && <h3>Your cut string is: </h3>}
      <div className={toggleAnimation && classes.inputSpans}>
        {outputArr.map((outputChar, idx) => (
          <span key={idx} className={toggleAnimation && classes.output}>
            {outputChar}
          </span>
        ))}
      </div>
    </div>) : ''
  );
};

export default OutputContainer;
