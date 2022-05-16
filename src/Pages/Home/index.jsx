import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components/Button";
import Header from "../../Components/Header";
import ListNoticia from "../../Components/listNoticia";

import Posts from "../../Components/Posts";

import { Container, DashDiv, Menu, SubHeader } from "./styles";
const Home = () => {
  const history = useHistory();

  const [showPosts, setShowPosts] = useState(false);

  const showHiddenPosts = () => {
    setShowPosts(true);
  };

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
          <Button
            onClick={showHiddenPosts}
            backGround="#000000"
            textColor="#fff"
            borderRadius="8px"
          >
            Posts
          </Button>
        </DashDiv>
        <div>
          <Button backGround="#000000" textColor="#fff" borderRadius="8px">
           <ListNoticia/>
            Notícias
          </Button>
        </div>
      </Menu>
      {showPosts && <Posts />}
    </Container>
  );
};

export default Home;
