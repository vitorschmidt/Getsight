import {Container, Row, Content, Description} from "./style-version-2";
import logoNoticia from "../../Assets/img/logoNoticia.png"

const CardNoticia = ({ noticia }) => {
  return (
    <Container>
      <Row>
        <img src={logoNoticia} alt="Foto noticia" />
      </Row>
      <Content>
        {/* api original  */}
        <h2 className="name">{noticia.title}</h2>
        <Description><p>{noticia.description}</p></Description>
        <span className="center">{noticia.pubDate}</span>

        {/* <h2 className="name">{noticia.noticia}</h2>  */}
        
      </Content>
    </Container>
  );
};

export default CardNoticia;
