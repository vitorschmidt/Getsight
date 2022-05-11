import { createContext, useState } from "react";

export const CandidatesContext = createContext([]);

export const CandidatesProvider = ({ children }) => {
  const [candidates] = useState([
    {
      id: 1,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
    {
      id: 2,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
    {
      id: 3,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
    {
      id: 4,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
    {
      id: 5,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
    {
      id: 6,
      name: "Pedro Paulo",
      cargo: "Deputador Estadual",
      img: "./images/candidate.png",
      numero: "65487",
      partido: "PPP",
      categoria: "Educação",
    },
  ]);

  return (
      <CandidatesContext.Provider value={{candidates}}>
          {children}
      </CandidatesContext.Provider>
  )
};
