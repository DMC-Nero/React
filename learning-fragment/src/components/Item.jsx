import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  console.log(styles)
  return (
    <li  className={` ${styles["pk-item"] }    list-group-item ` } >
      <span className={ styles["pk-span"] }> {foodItem}</span>
    </li>
  );
};
export default Item;

