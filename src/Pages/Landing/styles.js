import styled from "styled-components";


export const  Container = styled.div`
height:100vh;
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
    font-size:50px;
}
.indice h3{
    font-size:40px;
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
.politico{
    width:50%;
    display:flex;
   align-items:center;
}
.politico img{
    border-radius:50%;
    height:80%;
    
}
a:hover{
    cursor: pointer;
}

`