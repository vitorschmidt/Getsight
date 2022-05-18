import styled from "styled-components";
 
export const Container = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 25px;
    margin: 15px 0 30px 0;
    
    
    .swiper {
    
        width: 100%;
        height: 100%;  
         
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
  
        /* Center slide text vertically */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;   
    }

`
