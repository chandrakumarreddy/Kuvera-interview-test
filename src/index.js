import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FundsContext, { fundsReducer } from "./fundsContext";
import routes from "./routes";
import "./index.css";

function renderRoutes(route) {
  return <Route {...route} key={route._key} />;
}

function Root() {
  const context = React.useContext(FundsContext);
  const [state, dispatch] = React.useReducer(fundsReducer, context);
  return (
    <FundsContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{routes.map(renderRoutes)}</Switch>
      </Router>
    </FundsContext.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
