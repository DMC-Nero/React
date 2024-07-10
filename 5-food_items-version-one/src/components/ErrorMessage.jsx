import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({items}) => {

    return <>{ items.length === 0 && <h3 className={ styles["pk-h3-style"] }>I am still hungry.</h3> } </>;
  };
  export default ErrorMessage;
  