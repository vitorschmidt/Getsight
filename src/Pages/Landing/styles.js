import styled from "styled-components";
import vote from "../../Assets/img/vote.jpg";
import banner from "../../Assets/img/banner-desktop.png";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${vote});
  background-repeat: no-repeat;
  background-position: right;
  background-color: #47777b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #logo {
    height: 70px;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
  }
  .text {
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: left;
    width: 100%;
    img {
      width: 280px;
    }
  }
  .indice {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 1rem;
    width: 40%;
  }
  .indice h1 {
    font-size: 2rem;
  }
  .indice h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .indice p {
    text-align: center;
    font-size: 1rem;
  }
  .indice button {
    width: 280px;
    height: 80px;
    font-weight: 1000;
    box-shadow: 0px 9px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .button {
    display: flex;
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
  .button button:hover {
    color: white;
    background-color: #00f40a;
  }

  a:hover {
    cursor: pointer;
  }

  @media (min-width: 1102px) {
    background-image: url(${banner});
    display: flex;
    background-size: 100vh;

    .header {
      margin-top: -80px;
    }

    .indice {
      display: flex;
    }
  }

  @media (max-width: 1101px) {
    background-size: 100vw;
    background-size: 100vh;
    background-size: cover;
    background-position: center;

    .text {
      margin: auto;
      padding: 1rem;

      img {
        margin: auto;
        width: 200px;
      }
    }
    .header {
      flex-direction: column;
    }
    .indice {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 80vh;
      background-color: rgb(71, 119, 123, 0.95);
      box-shadow: 0px -1px 17px -8px rgba(0, 0, 0, 0.75);
    }
    #logo {
      height: 40px;
    }

    .indice h1 {
      font-size: 1rem;
    }
    .indice h3 {
      font-size: 0.8rem;
      font-weight: 400;
    }
    .indice p {
      font-size: 0.8rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
`;
