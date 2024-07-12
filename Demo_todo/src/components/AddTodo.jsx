import { useState } from "react";
import "./../App.css"
function AddTodo({ onNewItem }) {
const [todoName, setTodoName] = useState();
const [dueDate, setDueDate] = useState();

const handleNameChange = (event) => {
    setTodoName(event.target.value);
};

const handleDateChange = (event) => {
    setDueDate(event.target.value);
};

const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
};

return (
    <div className="container text-center" >
    <div className="row pk-row">
        <div className="col-6">
        <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            className="addTodo-input"
        />
        </div>
        <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
        <button
            type="button"
            className="btn btn-success pk-button"
            onClick={handleAddButtonClicked}
        >
            Add
        </button>
        </div>
    </div>
    </div>
);
}
export default AddTodo;
