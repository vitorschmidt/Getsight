import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    Api.post("/users")
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@GetSight:token", token);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContext.Provider value={(user, getUser)}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
