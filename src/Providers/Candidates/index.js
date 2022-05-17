//Hooks imports
import { createContext, useContext, useState } from "react";

import { Api } from "../../services/Api";

import { useEffect } from "react";

export const CandidateContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidate, setCandidate] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [value, setValue] = useState(false);
  const [search, setSearch] = useState("");

  const getCandidates = () => {
    Api.get("/candidatos")
      .then((response) => {
        setCandidate(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const filter = () => {
    const filtered = candidate.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.categoria
          .toLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        candidate.numero
          .toString()
          .toLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        candidate.cargo.toLowerCase().includes(search.toLocaleLowerCase()) ||
        candidate.partido.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilteredCandidates(filtered);
    setValue(true);
  };

  return (
    <CandidateContext.Provider value={{ candidate, getCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidate = () => useContext(CandidateContext);
