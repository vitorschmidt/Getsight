import { Container } from "./style";
import { useEffect } from "react";
import CardNoticia from "../CardNoticias";
import { useNoticia } from "../../Providers/Noticia";
 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const ListNoticia = () => {
  //caso va utilizar a api fake
  const { noticia, getNoticiaPropria } = useNoticia();
  useEffect(() => {
      getNoticiaPropria();
    }, [getNoticiaPropria]);

  //api real


//   const { noticia, getNoticia } = useNoticia();
//   console.log(noticia);

  // const { noticia, getNoticia } = useNoticia();


  // useEffect(() => {
  //   getNoticia();
  // }, []);


  return (
    <Container>
        <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true
              }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                noticia.map((noticia, index) => (
                    <SwiperSlide key={index}>
                        <CardNoticia  noticia={noticia} />
                    </SwiperSlide>
        
                ))}
           
            
        </Swiper>
      
 
    </Container>
  );
};

export default ListNoticia;
