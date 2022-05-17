//Styled-component imports
import { Container, DashDiv, Menu, SubHeader } from "./styles";

//Components imports
import { Button } from "../../Components/Button";
import Header from "../../Components/Header";

//Router-dom imports
import { useHistory } from "react-router-dom";

import { useState } from "react";
import ListNoticia from "../../Components/listNoticia";

import Posts from "../../Components/Posts";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const [showPosts, setShowPosts] = useState(false);
  const [showNews, setshowNews] = useState(false);

  const showHiddenPosts = () => {
    setShowPosts(true);
    setshowNews(false);
  };

  const showHiddenNews = () => {
    setShowPosts(false);
    setshowNews(true);
  };

  return (
    <>
      {authenticated ? (
        <Container>
          {/* coloquei a header aqui da versao não logada pra testar */}
          <Header bg="#C2D8DA" height="80px" headerVersion="dashboard" />
          <SubHeader>
            <h2>Esta com alguma dúvida sobre seu candidato?</h2>
            <p>
              Tire as suas dúvidas sobre, mandatos, propostas, partido e
              opiniões
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
              <Button
                onClick={showHiddenNews}
                backGround="#000000"
                textColor="#fff"
                borderRadius="8px"
              >
                Notícias
              </Button>
            </div>
          </Menu>
          {showPosts && <Posts authenticated={authenticated} />}
          {showNews && <ListNoticia />}
        </Container>
      ) : (
        <Container>
          {/* coloquei a header aqui da versao não logada pra testar */}
          <Header bg="#C2D8DA" height="80px" headerVersion="home" />
          <SubHeader>
            <h2>Esta com alguma dúvida sobre seu candidato?</h2>
            <p>
              Tire as suas dúvidas sobre, mandatos, propostas, partido e
              opiniões
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

          <h1>Deslogado</h1>

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
              <Button
                onClick={showHiddenNews}
                backGround="#000000"
                textColor="#fff"
                borderRadius="8px"
              >
                Notícias
              </Button>
            </div>
          </Menu>
          {showPosts && <Posts authenticated={authenticated} />}
          {showNews && <ListNoticia />}
        </Container>
      )}
    </>
  );
};

export default Home;
