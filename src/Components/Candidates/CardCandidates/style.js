import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;

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

  @media (max-width: 500px) {
    padding: 10px 10px;

    img {
      width: 50px;
      height: 50px;
    }

    .ocupacao {
      flex-direction: column;
    }
    .historia {
      display: none;
    }
  }
`;

