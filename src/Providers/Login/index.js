//Hooks imports
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
//Service imports
import { Api } from "../../services/Api";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const history = useHistory();

  const getUser = async (users, setAuthenticated) => {
    await Api.post("/login", users)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@GetSight:token", accessToken);
        localStorage.setItem("@GetSight:userId", response.data.user.id);
        setAuthenticated(true);
        setUser(response.data.user);
        setToken(accessToken);

        toast.success("Login realizado com sucesso!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login não realizado!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const getUserLogged = (id, token) => {
    Api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUser(response.data);
    });
  };

  return (
    <LoginContext.Provider value={{ user, getUser, getUserLogged, token }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
