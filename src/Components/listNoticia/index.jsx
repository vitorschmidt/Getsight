import { Container } from "./style";
import { useEffect } from "react";
import CardNoticia from "../CardNoticias";
import { useNoticia } from "../../Providers/Noticia";

const ListNoticia = () => {
  const { noticia, getNoticia } = useNoticia();

  useEffect(() => {
    getNoticia();
  }, [getNoticia]);

  return (
    <Container>
      {noticia.map((noticia, index) => (
        <CardNoticia key={index} noticia={noticia} />
      ))}
    </Container>
  );
};

export default ListNoticia;
