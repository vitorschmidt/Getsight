import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1rem;
  align-items: stretch;
  text-align: center;
  background-color: var(--background-primary);

  .boxImg {
    display: none;
  }

text-align: left;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
height:100vh;

picture{
    max-width:350px;
    width:80%;
    min-width:150px;
}

img{
    width:100%;
    
    height:70px;
}
form{
    min-height:50vh;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    gap:10px;
}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  animation: ${fadeIn} 1s;
  width: 100%;
  max-height: 500px;
  background-color: var(--light-grey);
  padding: 1rem;
  border-radius: 4px;
  overflow-y: scroll;
  form,
  .boxCadastro {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: var(--light-grey);
    h1 {
      margin: 25px 0;
      color: var(--light-grey);
      font-size: 1rem;
    }
    .label {
      margin-bottom: 10px;
      color: var(--black);
    }
    button {
      width: 100%;
      font-weight: 500;
    }
  }

  .boxCadastro {
    color: var(--black);
    span {
      font-weight: 1000;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
