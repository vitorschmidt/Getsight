import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../Assets/img/logo.png";
import { Button } from "../../Components/Button";

const Landing = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);
  return (
    <Container>
      <div className="text">
        <img id="logo" src={logo} alt="Logo GetSight" />

        <div className="indice">
          <h1>
            Você gostaria de opinar ou tirar duvidas sobre seus candidatos para
            a eleição ?
          </h1>
          <h3>
            - Saiba quem são os candidatos acompanhe suas trajetorias,
            pretensões, partido
          </h3>
          <h3>
            - Opine sobre seus candidatos, esta com duvidas sobre questões
            eleitorais
          </h3>
          <h3>-Use filtros para controlar a sua busca</h3>
          <div className="button">
            <Button
              backGround="#f3f3f3"
              textColor="#47777b"
              onClick={() => handleNavegation("/register")}
            >
              CADASTRE-SE ✓
            </Button>
          </div>
          <p>
            Ficou curioso para ver como funciona ?{" "}
            <Link onClick={() => handleNavegation("/home")}>Clique aqui</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
