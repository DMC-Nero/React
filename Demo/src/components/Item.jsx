import Buttonk from "./Buttonk";
import styles from "./Item.module.css";


const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    // <li className={`${styles["pk-item"]} list-group-item active`} >
    <li className={`${styles["pk-item"]} list-group-item ${bought && "active"}`} >
      <span className={styles["pk-span"]}>{foodItem}</span>
      {/* <button className={`${styles.button} btn btn-info`}    onClick={handleBuyButton}>Buy</button>  */}
      <Buttonk handleBuyButton={handleBuyButton}/>
      
    </li>
  );
};
export default Item;
