import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("WELLCOME");

  const onButtonClick = (buttonText) => {
    if (calVal === 'WELLCOME') {
      if(buttonText != 'AC' && buttonText != 'Del' && buttonText != '%' && buttonText != '/' && buttonText != '*' && buttonText != '=' ) {
        setCalVal(buttonText);
      }else {
        setCalVal("");
      }

    } else {
    console.log("Named function -> button clicked. " + buttonText)
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "Del") {
      const str = calVal.substring(0, calVal.length-1);
      setCalVal(str);

      //str = str.substring(0, str.length - 1);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
}
  return (
    <center>
      <h1>Nero's - Calculator</h1>
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
    </center>
  );
}
export default App;


