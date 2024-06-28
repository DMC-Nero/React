import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "OFF",
    "AC",
    "%",
    "+/-",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
