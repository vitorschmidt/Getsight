import styled from "styled-components";
import vote from "../../Assets/img/vote.jpg";
import banner from "../../Assets/img/banner-desktop.png"
import { createGlobalStyle } from "styled-components";


export const  Container = styled.div`
width:100vw;
height:100vh;
background-image:url(${vote});
background-repeat:no-repeat;
background-position:right;
background-color:#47777B;
color:white;
display:flex;
flex-direction: column;
justify-content: space-evenly;


.header{
    display:flex;
    align-items: center;
    justify-content: space-between;
   
}
#logo{
    height:70px;
}
.buttons{
    display:flex;
    justify-content:space-around;
    width:400px;
    font-size:20px;
}
.text{
    display:flex;
    justify-content: space-around;
    
}
.indice{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    width:40%
}
.indice h1{
    font-size:40px;
}
.indice h3{
    font-size:30px;
    font-weight:400;
}
.indice p{
    font-size:20px;
}
.indice button{
    width:350px;
    height:80px;
    border-radius:4px;
    color: #47777B;
    box-shadow: 0px 9px 5px 0px rgba(0,0,0,0.75);
}
.button{
    display:flex;
    justify-content: center;
    animation: heartbeat 3s ease-in-out infinite both;
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
.button button:hover{
    color:white;
    background-color:#00F40A;
}

a:hover{
    cursor: pointer;
}
@media(min-width :1102px){
    
    background-image:url(${banner});
    display:flex;
    background-size:100vh;

    .header{
   margin-top:-80px;
   
    }
   
    .indice{
        margin-right:600px;
        gap:20px;
        display:flex;
        align-items: stretch;
     
    }
    .buttons{
    display:flex;
    align-items:center;
    width:150px;
    height:50px;
    font-size:15px;
    background-color:#008080;
    border-radius:4px;
    margin-right:100px;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
}
    
}

@media (max-width: 1101px) {
   background-size:100vw;
   background-size:100vh;
   background-size:cover;
   background-position:center;
  
   
.header{
    flex-direction: column;
}
.indice{
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    width:80%;
    height:80vh;
    background-color:#47777bad ;
    box-shadow: 0px -1px 17px -8px rgba(0,0,0,0.75);
    padding:15px;

}
#logo{
    height:40px;
}
.buttons{
    display:flex;
    align-items:center;
    width:90px;
    height:30px;
    font-size:15px;
    background-color:#008080;
    border-radius:4px;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
}
.indice h1{
    font-size:18px;
}
.indice h3{
    font-size:12px;
    font-weight:400;
}
.indice p{
    font-size:8px;
}
a{
    font-size:10px;
}

.indice button{
    width:150px;
    height:30px;
    font-size:12px;

}


  }
  
`;

