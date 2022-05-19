import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  height: 100px;
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 5px;
    margin-left: 10px;
    box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  }

  @media (min-width: 1101px) {
    width: 800px;

    img {
      margin-left: 50px;
    }

    h2,
    p,
    h3 {
      margin-right: 50px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  width:180px;

  h2 {
    font-size: 18px;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: var(--placeholder-text);
  }

  p {
    font-size: 20px;
    font-weight: 700;
    color: var(--red-2);
  }
`;
