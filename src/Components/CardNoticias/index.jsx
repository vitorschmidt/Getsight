import { Container, Content } from "./style";

const CardNoticia = ({ noticia }) => {
  return (
    <Container>
      <div>
        <img src={noticia.image} alt="Foto noticia" />
      </div>
      <Content>
        <h2 className="name">{noticia.noticia}</h2>
        
      </Content>
    </Container>
  );
};

export default CardNoticia;
