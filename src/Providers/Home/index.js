import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    Api.get("/dashboard")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HomeContext.Provider value={{ posts, getPosts }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
