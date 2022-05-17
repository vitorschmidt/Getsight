import { Container } from "./style";
import { useEffect } from "react";
import CardNoticia from "../CardNoticias";
import { useNoticia } from "../../Providers/Noticia";

import {Carousel} from "react-responsive-carousel"
const ListNoticia = () => {
  //caso va utilizar a api fake
  const { noticia, getNoticiaPropria } = useNoticia();
  useEffect(() => {
      getNoticiaPropria();
    }, [getNoticiaPropria]);
    
    
    //api real
  
  // const { noticia, getNoticia } = useNoticia();
  // useEffect(() => {
  //     getNoticia();
  //   }, []);

  return (
    <Container>
        <Carousel showThumbs={false} showArrows={true}>
            {noticia.map((noticia, index) => (
            <CardNoticia key={index} noticia={noticia} />
            ))}

        </Carousel>
        
    </Container>
  );
};

export default ListNoticia;
