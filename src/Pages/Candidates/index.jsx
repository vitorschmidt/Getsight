import { useContext } from "react";
import { CandidatesContext } from "../../Providers/Candidates";

const Candidates = () => {
  const { candidates } = useContext(CandidatesContext);

  return (
    <>
      <header>
        {/* {Logo} */}
        {/* Pesquisar */}
        {/* Botão Categoria */}
        {/* Botão Login */}
      </header>
      <main>
        {/* Lista de Candidatos */}
        <h1>Olá</h1>
        <p>{candidates[1].img}</p>
        <img src={candidates[1].img} alt="" />
      </main>
    </>
  );
};

export default Candidates;
