//Styled-component imports
import {
  Container,
  HeaderTop,
  Headers,
  ColRight,
  LogoContainer,
  ColLeft,
  ElectionType,
  Row,
} from "./style.js";

//Assets
import { ReactComponent as Logo } from "../../Assets/img/logo.svg";
import { FaSearch } from "react-icons/fa";

//Components imports
import { HeaderMediaQueries } from "./HeaderMediaQueries";
import { Button } from "../Button";
import Inputs from "../Input";

//Router-dom imports
import { useLogin } from "../../Providers/Login";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ bg, height, headerVersion }) => {
  const history = useHistory();
  const { user } = useLogin();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleNavegation = (path) => history.push(path);

  return (
    <Container bg={bg} height={height}>
      <HeaderMediaQueries version={headerVersion}>
        {
          /*  versão não logada*/
          headerVersion === "home" ? (
            <Headers version={headerVersion}>
              <ColLeft>
                <LogoContainer
                  onClick={() => handleNavegation("/")}
                  width="100%"
                  maxWidth="200px"
                >
                  <Logo />
                </LogoContainer>
              </ColLeft>

              <ColRight>
                <Link to="/login">Login</Link>

                <Button
                  onClick={() => history.push("/register")}
                  backGround="#000000"
                  textColor="#fff"
                >
                  Cadastrar
                </Button>
              </ColRight>
            </Headers>
          ) : headerVersion === "homeCandidates" ? (
            <Headers version={headerVersion}>
              <HeaderTop version={headerVersion}>
                <LogoContainer
                  onClick={() => handleNavegation("/")}
                  width="100%"
                  maxWidth="150px"
                >
                  <Logo />
                </LogoContainer>
                <Button
                  onClick={() => history.push("/login")}
                  backGround="#000000"
                  textColor="#fff"
                >
                  LOGIN
                </Button>
              </HeaderTop>

              <Row>
                <ColLeft maxWidth="800px">
                  <Inputs
                    InputContainerClass="inputContainer"
                    inputClass="inputBox"
                    icon={FaSearch}
                    placeholder="Pesquisar Candidato"
                    // onChange={(evt) => handleDual(evt)}
                  />
                </ColLeft>

                <ColRight maxWidth="500px">
                  <ElectionType>
                    <label>Tipo de Eleição</label>

                    <select>
                      <option>Municipal</option>
                      <option>Estadual</option>
                    </select>
                  </ElectionType>
                </ColRight>
              </Row>
            </Headers>
          ) : /* versão não logada vai até aqui */
          /* versão logada */
          headerVersion === "dashboard" ? (
            <Headers version={headerVersion}>
              <ColLeft width="100%">
                <LogoContainer
                  onClick={() => handleNavegation("/")}
                  width="100%"
                  maxWidth="200px"
                >
                  <Logo />
                </LogoContainer>
              </ColLeft>

              <ColRight
                maxWidth="350px"
                aTagFontSize="clamp(14px, 2vw, 18px)"
                pTagFontSize="clamp(16px, 3vw, 22px)"
              >
                {/* aqui será inserido o nome do usuário  */}

                <p>{user.name},</p>
                <Link to="/candidates">Candidatos</Link>

                <Button onClick={logout} backGround="#000000" textColor="#fff">
                  Sair
                </Button>
              </ColRight>
            </Headers>
          ) : headerVersion === "dashboardCandidates" ? (
            <Headers version={headerVersion}>
              <HeaderTop>
                <Button onClick={logout} backGround="#000000" textColor="#fff">
                  SAIR
                </Button>
              </HeaderTop>

              <ColLeft width="70%">
                <Inputs
                  InputContainerClass="inputContainer"
                  inputClass="inputBox"
                  icon={FaSearch}
                  placeholder="Pesquisar Candidato"
                  // onChange={(evt) => handleDual(evt)}
                />
              </ColLeft>

              <ColRight>
                <Button
                  onClick={() => handleNavegation("/home")}
                  backGround="#000000"
                  textColor="#fff"
                >
                  VOLTAR
                </Button>
                <Button onClick={logout} backGround="#000000" textColor="#fff">
                  SAIR
                </Button>
              </ColRight>
            </Headers>
          ) : headerVersion === "cola" ? (
            <Headers>
              <LogoContainer onClick={() => handleNavegation("/")}>
                <Logo />
              </LogoContainer>

              <ColRight>
                {/* aqui será inserido o nome do usuário  */}
                <p>{user.name},</p>
                <Button onClick={logout} backGround="#000000" textColor="#fff">
                  Sair
                </Button>
              </ColRight>
            </Headers>
          ) : (
            ""
          )
          /* versão logada vai até aqui */
        }
      </HeaderMediaQueries>
    </Container>
  );
};

export default Header;
