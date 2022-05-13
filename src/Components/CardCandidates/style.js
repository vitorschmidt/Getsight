import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;

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

  .historia a {
    color: #000;
  }

  .saberMais {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 10px 10px;

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
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      background-color: #908c8c;
    }
  }
`;
