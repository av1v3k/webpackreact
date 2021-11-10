import React from "react";
// import AddTodoForm from "./components/AddTodoForm";
// import TodoList from "./components/TodoList";
// import TotalCompleteItems from "./components/TotalCompleteItems";
import SignInSide from "./components/SignInSide";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import Topics from "./components/Topics";

import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./utils/ErrorBoundary";
import PaperMachine from "./components/PaperMachine";
import WrapperPaper from "./components/WrapperPaper";
import DashboardWrapper from "./components/DashboardWrapper";

export default function NestingExample() {
  return (
    <Router>
      <>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr /> */}

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          ></Route>
          <Route exact path="/login">
            <SignInSide />
          </Route>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/dashboard">
            <DashboardWrapper />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

// function App() {
//   return (
//     <>
//       {/* <h2>Welcome to React App</h2>
//       <h3>Date : {new Date().toDateString()}</h3> */}
//       {/* <AddTodoForm />
//       <TodoList />
//       <TotalCompleteItems/> */}
//       <ErrorBoundary>
//         <Router>
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={() => {
//                 return <Redirect to="/login" />;
//               }}
//             ></Route>
//             <Route exact path="/login">
//               <SignInSide />
//             </Route>
//             <Route exact path="/dashboard">
//               <Dashboard />
//             </Route>
//             <Route path="/dashboard/:slug">
//               <WrapperPaper />
//             </Route>
//           </Switch>
//         </Router>
//       </ErrorBoundary>
//     </>
//   );
// }

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
