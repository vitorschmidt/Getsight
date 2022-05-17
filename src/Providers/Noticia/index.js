import { createContext, useContext, useState } from "react";
import { Api } from "../../services/Api";

export const NoticiaContext = createContext();

export const NoticiaProvider = ({ children }) => {
  const [noticia, setNoticia] = useState([]);

  const getNoticia = () => {
    Api.get("/noticias")
      .then((response) => {
        setNoticia(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NoticiaContext.Provider value={{ noticia, getNoticia }}>
      {children}
    </NoticiaContext.Provider>
  );
};

export const useNoticia = () => useContext(NoticiaContext);
