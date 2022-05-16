import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width:320px;
  max-width:400px;
  height: 80px;
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
  margin-right: 10px;

  h2 {
    font-size: 0.8rem;
    margin-left:10px;
  }
  h3 {
    font-weight: 400;
    font-size: 0.7rem;
    color: var(--placeholder-text);
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--red-2);
  }
`;
