
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";


function App() {
  let foodItems = ["Biryani", "Dosa", "Idly", "poori", "swarma", "Bonda"];

  //let foodItems = [];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>

      <ErrorMessage items={foodItems} />

      <div className="container">
      <FoodItems foodItem={foodItems}/>
      </div>
    </>
  );
}
export default App;
