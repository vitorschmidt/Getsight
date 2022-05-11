import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const getUser = () => {};
};

export const useLogin = () => useContext(LoginContext);
