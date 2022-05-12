import { Route, Switch } from "react-router-dom";
import Candidates from "../Pages/Candidates";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Landing from "../Pages/Landing";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/candidates">
        <Candidates />
      </Route>
    </Switch>
  );
};

export default Routes;
