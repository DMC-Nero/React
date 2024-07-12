import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import  {useState}  from "react";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Buttonk from "./components/Buttonk";
function App() {
  // let foodItems = ["Biryani", "Dosa", "Idly", "poori", "swarma", "Bonda"];

  // let foodItems = [];

  let [foodItems, setFoodItems] = useState(["Biryani", "Dosa", "Idly", "poori", "swarma", "Bonda"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];		// spread operator
      setFoodItems(newItems);
    }
  };


  return (
    <center>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems} />
      <FoodItems foodItem={foodItems}/>
      // </Container>
      {/* <Buttonk></Buttonk> */}
    </center>
  );
}
export default App;
