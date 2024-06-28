
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Practice React",
      dueDate: "26/06/2024",
    },
    {
      name: "Practice Java",
      dueDate: "27/06/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
