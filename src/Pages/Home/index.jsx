import { useHistory } from "react-router-dom";
import { Button } from "../../Components/Button";
import Header from "../../Components/Header";
import { Container, DashDiv, Menu, SubHeader } from "./styles";
const Home = () => {
  const history = useHistory();

  return (
    <Container>
      {/* coloquei a header aqui da versao não logada pra testar */}
      <Header bg="#C2D8DA" height="80px" headerVersion="home" />
      <SubHeader>
        <h2>Esta com alguma dúvida sobre seu candidato?</h2>
        <p>
          Tire as suas dúvidas sobre, mandatos, propostas, partido e opiniões
        </p>
        <Button
          onClick={() => history.push("/candidates")}
          width="100%"
          maxWidth="200px"
          height="40px"
          backGround="#000000"
          textColor="#fff"
          borderRadius="20px"
        >
          Candidatos
        </Button>
      </SubHeader>

      <Menu>
        <DashDiv>
          <Button backGround="#000000" textColor="#fff" borderRadius="8px">
            Posts
          </Button>
        </DashDiv>
        <div>
          <Button backGround="#000000" textColor="#fff" borderRadius="8px">
            Notícias
          </Button>
        </div>
      </Menu>
    </Container>
  );
};

export default Home;
