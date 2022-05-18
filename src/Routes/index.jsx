//Page imports
import Candidates from "../Pages/Candidates";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Landing from "../Pages/Landing";
import Cola from "../Pages/Cola";

//Router-dom imports
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import { useLogin } from "../Providers/Login";

const Routes = () => {
  const { getUserLogged } = useLogin();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("@GetSight:token")?true:false);

  useEffect(() => {
    const token = localStorage.getItem("@GetSight:token");
    const id = localStorage.getItem("@GetSight:userId");
    // use state(false)
    // if (token) {
    //   setAuthenticated(true);
      if (id) {
      getUserLogged(id, token);
      }
    
  }, [authenticated]);
  
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        <Login  setAuthenticated={setAuthenticated}/>
      </Route>
      <Route exact path="/register">
        <Register type="user" />
      </Route>
      <Route exact path="/cola">
        <Cola authenticated={authenticated} />
      </Route>
      <Route exact path="/candidates">
        <Candidates authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
