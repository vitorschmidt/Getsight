//Hooks imports
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

//Service imports
import { useCandidate } from "../Candidates";

export const ColaContext = createContext();

export const ColaProvider = ({ children }) => {
  const { candidate } = useCandidate();

  const [loadCola] = useState(
    JSON.parse(localStorage.getItem("@candidates:cola"))
  );

  const [cola, setCola] = useState([]);

  const addCola = (item) => {
    const hasItem = cola.some((element) => element.numero === item.numero);
    if (!hasItem) {
      if (cola.length < 6) {
        setCola([...cola, item]);
        const newCola = [...cola, item];
        localStorage.setItem("@candidates:cola", JSON.stringify(newCola));
        toast.success("Candidato adicionado a cola", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.error("O numero máximo é de 6 candidatos!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } else {
      toast.error("Candidato já foi adicionado!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const loadStoreCola = () => {
    if (loadCola) {
      setCola(loadCola);
    }
  };

  useEffect(() => {
    loadStoreCola();
  }, []);

  // const getColas = () => {
  //   Api.get("/cola")
  //     .then((response) => {
  //       setCola(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleCola = (numero) => {
    const colaAdd = candidate.find((cadidateVoto) => {
      return cadidateVoto.numero === numero;
    });
    if (cola.includes(colaAdd)) {
      alert("Candidato já adicionado.");
    } else {
      setCola([...cola, colaAdd]);
    }
  };

  return (
    <ColaContext.Provider value={{ cola, handleCola, addCola }}>
      {children}
    </ColaContext.Provider>
  );
};

export const useCola = () => useContext(ColaContext);
