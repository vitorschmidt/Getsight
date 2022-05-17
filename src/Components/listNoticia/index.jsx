import { Container } from "./style";
import { useEffect } from "react";
import CardNoticia from "../CardNoticias";
import { useNoticia } from "../../Providers/Noticia";

const ListNoticia = () => {
  //caso va utilizar a api fake
  // const { noticia, getNoticiaPropria } = useNoticia();
  // useEffect(() => {
  //     getNoticiaPropria();
  //   }, [getNoticiaPropria]);
    
    
    //api real
  
  const { noticia, getNoticia } = useNoticia();
  console.log(noticia)
  useEffect(() => {
      getNoticia();
    }, []);

  return (
    <Container>
      {noticia.map((noticia, index) => (
        <CardNoticia key={index} noticia={noticia} />
      ))}
    </Container>
  );
};

export default ListNoticia;
