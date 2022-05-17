import styled from "styled-components";

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  background-color: var(--light-grey);
  box-shadow: 0px 2px 19px 0px rgba(166, 165, 165, 0.75);

  margin: 20px 0;

  border-radius: 8px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid var(--black);
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--light-grey);
  box-shadow: 0px 2px 19px 0px rgba(166, 165, 165, 0.75);

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
  }

  input {
    margin-bottom: 10px;
    padding: 10px 15px;

    border-radius: 20px;

    border: none;

    background-color: var(--card);

    &::placeholder {
      color: var(--light-grey);
    }
  }

  textarea {
    margin-bottom: 10px;
    padding: 10px 15px;

    border-radius: 20px;

    border: none;
    resize: none;

    background-color: var(--card);

    height: 100px;

    &::placeholder {
      color: var(--light-grey);
    }
  }

  textarea:hover,
  input:hover {
    border: 1px solid var(--black);
  }

  button {
    align-self: flex-end;
  }
`;
