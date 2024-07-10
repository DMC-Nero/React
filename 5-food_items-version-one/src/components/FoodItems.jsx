import Item from "./Item";
import styles from "./FoodItems.module.css";
const FoodItems = ({ foodItem }) => {
  return (
    <ul className={`${styles["ul-container"]} list-group costum.list-group`}>
      {foodItem.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
