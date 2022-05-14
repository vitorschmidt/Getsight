import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";
import { useEffect } from "react";

export const CandidateContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidate, setCandidate] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

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

  const filter = () => {};

  return (
    <CandidateContext.Provider value={{ candidate, getCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidate = () => useContext(CandidateContext);
