import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";

export const CandidateContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidate, setCandidate] = useState([]);

  const getCandidates = () => {
    Api.get("/candidatos")
      .then((response) => {
        setCandidate(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CandidateContext.Provider value={(candidate, getCandidates)}>
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidate = () => useContext(CandidateContext);
