import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems/>
    </div>
  );
}

export default App;
