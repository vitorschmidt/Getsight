import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 8px;
  min-width:320px;
  width:100%;
  min-height: 300px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  .heart-icon{
      fill: var(--red-2);
      cursor: pointer;
    }

    .chat-icon{
      cursor: pointer;
      fill: var(--blue-2);
      margin-right: 10px;
      cursor: pointer;
  }

  .btn-comments{
    cursor: pointer;

  }
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
  padding-left: 10px;
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
  margin: 10px 0;
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);

  h2{
    margin-left:10px;
  }
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
    
  }

  
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-close{
    background-color: gray;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
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
  background-color: var(--grey-1);
  border-radius: 8px;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  
  .like{
      display: flex;
       align-items: center;
  }

  .user {
    display: flex;
    flex-direction: row;
    padding-bottom:10px;
  }
  .Comments-like{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin-left:0;
  }
  h3 {
    width: 70%;
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
    justify-content: space-between;
    background-color: var(--grey-1);
    border-radius: 8px;
  }
  @media (min-width: 1101px) {
    flex-direction:row;
    
    .user{
      border-right: 2px solid var(--black);
      width:30%;
      max-width:300px;
      
    }
     div{
      width:70%;
      align-items: center;
    }
    div h3{
      max-width:500px;
    }
  }
`;
