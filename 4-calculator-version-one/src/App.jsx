import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <center>
      <h1>Nero's - Calculator</h1>
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
    </center>
  );
}
export default App;


