import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 8px;
  min-height: 300px;
  margin-top: 10px;

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin-left: 10px;
    max-width:100%;
    
  }

  h2 {
    margin-left: 10px;
    
  }

  h4 {
    font-size: 12px;
    color: var(--placeholder-tex);
    margin-top: 5px;
    font-weight: 400;
    
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;

  margin: 10px;
  
  margin-right: 100px;
  align-items: center;
    align-self: start;
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
    justify-content: start;
    margin-left: 10px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-1);
  border-radius: 8px;
  padding: 10px;
  width: 95%;
  height: 80%;
  justify-content: center;
  margin-top: 5px;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-1);
  border-radius: 8px;
  width: 95%;

  margin-top: 5px;
  margin-bottom: 10px;
  h2 {
    display: flex;
    align-items: center;

    svg {
      fill: var(--red-2);
    }
  }

  svg {
    fill: var(--blue-2);
    margin-right: 10px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 14px;
  }

  textarea {
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 10px;
    resize: none;
    width: 100%;
    height: 100px;
  }

  input {
    width: 100%;
    height: 30px;

    border: none;
    border-radius: 8px;

    padding: 10px;

    margin: 10px 0;
  }

  .header {
    display: flex;

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card);
  border-radius: 8px;
  margin: 0 auto;
  width: 50%;
  height: 100%;
  justify-content: space-between;
  border-radius: 8px;

  .user {
    display: flex;
    flex-direction: row;
  }
  h2 {
    margin-top: 10px;
    width: 10%;
  }
  h3 {
    width: 70%;
    margin-top: 10px;
  }
  margin: 10px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .user div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 10px;
    border-radius: 8px;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background-color: var(--grey-1);
    border-radius: 8px;
  }
`;
