import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 8px;
  height: 200px;

  margin-top: 10px;

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin-left: 10px;
  }

  h2 {
    margin-left: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;

  margin: 10px;
  margin-right: 100px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  h2 {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 10px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card);
  border-radius: 8px;

  width: 95%;
  height: 80%;

  margin-top: 5px;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card);
  border-radius: 8px;
  width: 95%;

  margin-top: 5px;
`;
