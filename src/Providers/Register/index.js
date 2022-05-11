import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [registerUser, setRegister] = useState([]);

  const postUser = ({ user }) => {
    Api.post("/users", user)
      .then((response) => {
        console.log(response.data);
        setRegister(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegisterContext.Provider value={(registerUser, postUser)}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
