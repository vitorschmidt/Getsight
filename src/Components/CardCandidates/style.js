import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
    background-size: contain;
    border-radius: 50%;
    margin-left: 10px;
  }

  .informacoes {
    width: 300px;
    padding-left: 30px;
  }

  .ocupacao {
    display: flex;
  }

  .name {
    margin-right: 10px;
  }

  .historia {
    margin: 10px;
    padding: 20px;
    width: 760px;
    border-radius: 10px;
    background-color: #908c8c;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .botao {
    margin-right: 20px;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 25px;
    height: 60px;
    width: 140px;
  }

  .historia a {
    color: #000;
  }

  .saberMais {
    display: none;
  }

  .categoria {
    width: 50px;
  }

  @media (max-width: 500px) {
    padding: 10px 10px;
    font-size: 12px;

    img {
      width: 50px;
      height: 50px;
      margin: 0;
    }

    .ocupacao {
      flex-direction: column;
    }
    .historia {
      display: none;
    }

    .informacoes {
      padding-left: 15px;
    }

    .saberMais {
      display: inline-block;
      padding: 10px;
      border-radius: 10px;
      width: 70px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.3);
      font-size: 12px;
      background-color: #aaa8a8;
    }

    .saberMais:hover {
      background-color: #908c8c;
    }

    .saberMais a {
      color: #000;
    }

    .botao {
      font-size: 12px;
      padding: 0px 10px;
    }
  }
`;
