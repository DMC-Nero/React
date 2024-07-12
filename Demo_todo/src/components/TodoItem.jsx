
import React, { useState } from "react";
import "./../App.css";
import Buttonk from "./Buttonk";
import styles from "./TodoItem.module.css"; 

function TodoItem({ todoName, todoDate, onDeleteClick }) {
const [isDeleting, setIsDeleting] = useState(false);

const handleDelete = () => {
    setIsDeleting(true);
    // Perform deletion after 7 seconds
    setTimeout(() => {
    onDeleteClick(todoName);
      setIsDeleting(false); // Reset isDeleting state back to false
    }, 3500);
};

return (
    <div className={`container ${isDeleting ? styles.deleteAnimation : ""}`}>
    <div className="row pk-row">
        <div className="col-6 lol1">{todoName}</div>
        <div className="col-4 lol2">{todoDate}</div>
        <div className="col-2">
        <Buttonk onDeleteClick={handleDelete} todoName={todoName} />
        </div>
    </div>
    </div>
);
}

export default TodoItem;
