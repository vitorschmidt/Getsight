//Styled-component imports
import {
  Container,
  LogoContainer,
  Headers,
  ColRight,
  Description,
} from "./style.js";

//Assets
import { ReactComponent as Logo } from "../img/logo.svg";
import { FaSearch } from "react-icons/fa";

//Components imports
import { Button } from "../Button";
import Inputs from "../Input";

//Router-dom imports
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ bg, height, headerVersion, user = "Teste," }) => {
  const history = useHistory();

  return (
    <Container bg={bg} height={height}>
      {
        /*  versão não logada*/
        headerVersion === "home" ? (
          <Headers>
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <ColRight width="300px">
              <Button
                onClick={() => history.push("/")}
                backGround="#000000"
                textColor="#fff"
              >
                Sair
              </Button>
              <div className="teste">
              <Button
                onClick={() => history.push("/login")}
                backGround="#000000"
                textColor="#fff"
              >
                Login
              </Button>
              <Button
                onClick={() => history.push("/register")}
                backGround="#000000"
                textColor="#fff"
              >
                Cadastrar
              </Button>
              </div>
              
            </ColRight>
          </Headers>
        ) : headerVersion === "homeCandidates" ? (
          <Headers>
            <LogoContainer>
              <Logo />
              <Button
                onClick={() => history.push("/login")}
                backGround="#000000"
                textColor="#fff"
              >
                LOGIN
              </Button>
            </LogoContainer>
            <ColRight>
              <Inputs
                InputContainerClass="inputContainer"
                inputClass="inputBox"
                icon={FaSearch}
              />
              <Description>
                <p>Tipo de eleição</p>
                <select>
                  <option>Municipal</option>
                  <option>Federal/Estadual</option>
                  
                </select>
              </Description>
            </ColRight>
          </Headers>
        ) : /* versão não logada vai até aqui */
        /* versão logada */
        headerVersion === "dashboard" ? (
          <Headers>
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <ColRight>
              {/* aqui será inserido o nome do usuário  */}
              <p>{user}</p>
              <Link to="/candidates">Candidatos</Link>
              <Button
                onClick={() => history.push("/")}
                width="100%"
                maxWidth="200px"
                height="50px"
                backGround="#000000"
                textColor="#fff"
                borderRadius="20px"
              >
                Sair
              </Button>
            </ColRight>
          </Headers>
        ) : headerVersion === "dashboardCandidates" ? (
          <Headers>
            <Inputs icon={FaSearch} />
            <ColRight>
              <Button
                onClick={() => history.push("/")}
                width="100%"
                maxWidth="100px"
                height="50px"
                backGround="#000000"
                textColor="#fff"
                borderRadius="20px"
              >
                SAIR
              </Button>
            </ColRight>
          </Headers>
        ) : /* versão cola */
        headerVersion === "cola" ? (
          <Headers>
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <ColRight>
              {/* aqui será inserido o nome do usuário  */}
              <p>{user}</p>
              <Button
                onClick={() => history.push("/")}
                backGround="#000000"
                textColor="#fff"
              >
                Sair
              </Button>
            </ColRight>
          </Headers>
        ) : (
          /* versão vai até aqui */
          ""
        )
      }
    </Container>
  );
};

export default Header;
