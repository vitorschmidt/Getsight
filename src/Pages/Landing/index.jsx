import { useHistory } from "react-router-dom";
import { Container} from "./styles";
import logo from "../../Components/img/logo.png";
import candidato from"../../Components/img/politico.png";
const Landing = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path)
  return (
  <>
  <Container>
    <div className="header">
      <div className="logo">
      <img id="logo"src={logo} alt="Logo GetSight" />
      </div>
      <div className="buttons">
            <a onClick={()=> handleNavegation("/candidates")}>Candidates</a>
            <a onClick={()=> handleNavegation("/login")}>Login</a>
      </div>
    </div>
    <div className="text">
      <div className="indice">
        <h1>Você gostaria de opinar ou tirar duvidas sobre seus candidatos  para a eleição ?</h1>
        <h3>- Saiba quem são os candidatos acompanhe suas trajetorias, pretensões, partido</h3>
        <h3>- Opine sobre seus candidatos, esta com duvidas sobre questões eleitorais</h3>
        <h3>-Use filtros para controlar a sua busca</h3>
        <div className="button">
           <button onClick={()=> handleNavegation("/register")}>CADASTRE-SE ✓</button>
        </div>
      <p>Ficou curioso para  ver como funciona ? <a onClick={()=> handleNavegation("/home")}>Clique aqui</a></p>
      </div>
      <div className="politico">
      <img src={candidato} alt="Candidato" />
      </div>
      
    </div>
   
  
  <div>Landing</div>
  </Container>
  
  </>
  );
};

export default Landing;