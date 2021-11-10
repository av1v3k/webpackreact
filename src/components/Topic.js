import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

export default function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
