//Hooks imports
import { createContext, useContext, useState } from "react";

//Service imports
import { Api } from "../../services/Api";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUser = (users) => {
    Api.post("/login", users)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@GetSight:token", accessToken);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContext.Provider value={{ user, getUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
