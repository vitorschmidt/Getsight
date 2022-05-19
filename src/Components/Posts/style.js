import styled from "styled-components";
import teste from "../../Assets/img/post-fundo.jpg";

export const Container = styled.ul`
  list-style: none;
  background-color: var(--grey-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 500px;

  @media (min-width: 1101px) {
    width: 80%;
    margin: 30px auto 0 auto;

    section {
      display: flex;
      width: 80%;
      justify-content: center;
      align-items: center;
      height: 250px;
      margin-bottom: 20px;
      margin: 20px 0;
    }
  }
`;
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: var(--background-primary);
  box-shadow: 1px 1px 14px 0px rgba(0, 0, 0, 0.88);
  margin-top: 20px;
  border-radius: 8px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid var(--black);
  }

  h2 {
    border-bottom: 1px solid var(--black);
    margin-top: 5px;

    width: 150px;

    text-align: center;
    text-transform:capitalize;
  }
  p{
    text-transform:capitalize;
  }

  @media (min-width: 1101px) {
    width: 80%;
    max-width: 200px;
    height: 100%;
    border-right: 2px solid var(--black);
    margin-top: 0;
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--light-grey);
  box-shadow: 1px 1px 14px 0px rgba(0, 0, 0, 0.88);
  margin: 20px 0;
  border-radius: 8px;
  height: 220px;
 

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    align-self: flex-start;
  }

  form {
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: content-box;
    
  }

  input {
    margin-bottom: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    background-color: var(--card);
    border: 1px solid transparent;
    &::placeholder {
      color: var(--light-grey);
    }
  }

  input:hover,
  textarea:hover {
    box-shadow: 1px 1px 14px 0px rgba(0, 0, 0, 0.88);
  }

  textarea {
    margin-bottom: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    resize: none;
    background-color: var(--card);
    height: 100px;
    border: 1px solid transparent;
    &::placeholder {
      color: var(--grey-1);
    }
  }

  textarea:hover,
  input:hover {
    border: 1px solid var(--black);
  }

  button {
    align-self: flex-end;
    box-shadow: 1px 1px 14px 0px rgba(0, 0, 0, 0.88);
  }

  @media (min-width: 1101px) {
    width: 70%;
    height: 100%;
    img {
      display: none;
    }
    box-shadow: 0px 2px 19px 0px rgba(166, 165, 165, 0.75);
    form {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;
