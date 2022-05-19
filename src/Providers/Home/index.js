import { createContext, useContext, useState } from "react";
import { Api } from "../../services/Api";

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

  const createNewPost = (data, token) => {
    Api.post("/dashboard", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HomeContext.Provider value={{ posts, getPosts, createNewPost }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
