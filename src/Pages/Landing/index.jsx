//Styled-component imports
import { Container } from "./styles";

//Assets
import logo from "../../Assets/img/logo.png";

//Components imports
import { Button } from "../../Components/Button";

//Router-dom imports
import { Link, useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
  };
  return (
    <Container>
      <div className="text">
        <img id="logo" src={logo} alt="Logo GetSight" />

        <div className="indice">
          <h1>
            Você gostaria de opinar ou tirar dúvidas sobre seus candidatos para
            a eleição?
          </h1>
          <h3>
            -Saiba quem são os candidatos acompanhe suas trajetorias,
            pretensões, partido.
          </h3>
          <h3>
            -Opine sobre seus candidatos, se está com dúvidas sobre questões
            eleitorais pergunte aqui!
          </h3>
          <h3>-Use filtros para controlar a sua busca</h3>
          <div className="button">
            <Button
              backGround="#f3f3f3"
              textColor="#47777b"
              onClick={handleRegister}
            >
              CADASTRE-SE ✓
            </Button>
          </div>
          <p>
            Ficou curioso para ver como funciona?
            <Link to="/home"> Clique aqui</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
