import { createContext, useContext, useState } from "react";
import api from "../../Services/Api";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [registerUser, setRegister] = useState([]);

  const postUser = () => {
    api
      .post("/users")
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
