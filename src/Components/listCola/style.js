import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const TelaVazio = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 30px;
  }

  @media (max-width: 1100px) {
    img {
      width: 100%;
    }

    h1,
    h2 {
      text-align: center;
    }
  }
`;
