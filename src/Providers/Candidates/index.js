import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";
import { useEffect } from "react";

export const CandidateContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidate, setCandidate] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState("");
  const [value, setValue] = useState(false);

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
    const filtered = candidate.filter((candidate) =>
      candidate.name.toLowerCase().includes(filteredCandidates.toLowerCase())
    );
    setFilteredCandidates(filtered);
    setValue(true);
  };

  return (
    <CandidateContext.Provider
      value={{
        candidate,
        filteredCandidates,
        value,
        setValue,
        setFilteredCandidates,
        getCandidates,
        filter,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export const useCandidate = () => useContext(CandidateContext);
