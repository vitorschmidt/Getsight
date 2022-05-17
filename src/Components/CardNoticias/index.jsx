import { Container, Content } from "./style";
import logoNoticia from "../../Assets/img/logoNoticia.png"

const CardNoticia = ({ noticia }) => {
  return (
    <Container>
      <div>
        <img src={logoNoticia} alt="Foto noticia" />
      </div>
      <Content>
        {/* api original  */}
        <h2 className="name">{noticia.title}</h2>
        <h3>{noticia.description}</h3>
        <span>{noticia.pubDate}</span>
        {/* <h2 className="name">{noticia.noticia}</h2>  */}
        
      </Content>
    </Container>
  );
};

export default CardNoticia;
