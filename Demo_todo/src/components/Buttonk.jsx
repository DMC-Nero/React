import React, { useEffect } from "react";
import "./Button.css";

const Buttonk = ({ todoName,onDeleteClick }) => {
  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', e => {
        if (!button.classList.contains('delete')) {
          button.classList.add('delete');
          setTimeout(() => button.classList.remove('delete'), 3200);
        }
        e.preventDefault();
      });
    });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <button type="button"  className="button"
    onClick={() => onDeleteClick(todoName)}>

            {/* <button  type="button"  className="btn btn-danger pk-button"
            onClick={() => onDeleteClick(todoName)} >Delete</button> */}

{/* <li className={`${styles["pk-item"]} list-group-item ${bought && "active"}`} > */}
{/* className={`${styles.button} btn btn-info`} onClick={handleBuyButton} */}


      <div className="trash">
        <div className="top">
          <div className="paper"></div>
        </div>
        <div className="box"></div>
        <div className="check">
          <svg viewBox="0 0 8 6">
            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
          </svg>
        </div>
      </div>
      <span>Delete</span>
    </button>
  );
};

export default Buttonk;
