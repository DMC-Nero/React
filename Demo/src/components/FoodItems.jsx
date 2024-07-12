import { useState } from "react";
import Item from "./Item";
import styles from "./FoodItems.module.css";


const FoodItems = ({ foodItem }) => {

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];		// spread operator
    setActiveItems(newItems);
  };


return (
  <ul className={`${styles["ul-container"]} list-group ${styles["ls-container"]}`}>
    {foodItem.map((item) => (
      <Item  key={item}  foodItem={item}
        // bought = {true}
        bought={activeItems.includes(item)}
        handleBuyButton={(event) => onBuyButton(item, event)}></Item>
    ))}
  </ul>
);
};

export default FoodItems;

