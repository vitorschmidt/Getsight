import { createContext, useContext, useState } from "react";
import { ApiNoticias } from "../../services/Api";
import { Api } from "../../services/Api";

export const NoticiaContext = createContext();

export const NoticiaProvider = ({ children }) => {
  const [noticia, setNoticia] = useState([]);

  //api fake
  const getNoticiaPropria = () => {
    Api.get("/noticias")
      .then((response) => {
         setNoticia(response.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //api original
  const getNoticia = () => {
    ApiNoticias.get("/1/news?apikey=pub_74705df7a1e9dc9468ac9027529cce4ec49c&q=politica&country=br&language=pt&category=politics")
      .then((response) => {
         setNoticia(response.data.results);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NoticiaContext.Provider value={{ noticia, getNoticiaPropria,getNoticia }}>
      {children}
    </NoticiaContext.Provider>
  );
};

export const useNoticia = () => useContext(NoticiaContext);
