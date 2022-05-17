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
  min-width: 320px;
  max-width: 400px;
  height: 80px;
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  height: 500px;
  padding-top: 100px;
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  h2,
  p,
  h3 {
    margin-right: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin-right: 30px;
    box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
    position: relative;
    bottom: 190px;
    left: 120px;
    margin-left: 50px;
  }

  .name {
    margin-bottom: 20px;
  }

  .center {
    margin-top: 10px;
    margin-left: 70px;
  }

  @media (max-width: 1100px) {
    width: 320px;

    img {
      bottom: 220px;
      left: 80%;
    }

    .name {
      margin-left: 0px;
    }

    .center {
      margin-left: 35px;
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
    margin-left: 10px;
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
