//Hooks imports
import { createContext, useContext, useState } from "react";

//Service imports
import { Api } from "../../services/Api";

export const ColaContext = createContext();

export const ColaProvider = ({ children }) => {
  const [cola, setCola] = useState([]);

  const getColas = () => {
    Api.get("/cola")
      .then((response) => {
        setCola(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ColaContext.Provider value={{ cola, getColas }}>
      {children}
    </ColaContext.Provider>
  );
};

export const useCola = () => useContext(ColaContext);
