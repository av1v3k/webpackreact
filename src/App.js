import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import SignInSide from "./components/SignInSide";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      {/* <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3> */}
      {/* <AddTodoForm />
      <TodoList />
      <TotalCompleteItems/> */}
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          ></Route>
          <Route path="/login">
            <SignInSide />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
