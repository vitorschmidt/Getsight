//Page imports
import Candidates from "../Pages/Candidates";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Landing from "../Pages/Landing";
import Cola from "../Pages/Cola";

//Router-dom imports
import { Route, Switch } from "react-router-dom";

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
        <Register type="user" />
      </Route>
      <Route exact path="/cola">
        <Cola />
      </Route>
      <Route exact path="/candidates">
        <Candidates />
      </Route>
    </Switch>
  );
};

export default Routes;
