import styled, { keyframes } from "styled-components";


export const  Container = styled.div`

height: 100%;
  width: 100%;
  padding: 1rem;
  align-items: stretch;
  text-align: center;
  background-color: var(--background-primary);

.boxImg {
    display: none;
  }
@media (min-width: 769px) {

height:100vh;
}



  @media (min-width: 1101px) {
    display: flex;
    padding: 0;
    .boxImg {
      display: block;

      img {
        width: 60vw;
        height: 100vh;
      }
    }
  }
`;




export const Content = styled.div`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: auto;

  picture{
    width:80%;
    height:40px;
}
img{
    max-width:150px;
    min-width:150px;
    height:40px;
}

`

const fadeIn = keyframes`
from{
    opacity: 0;  
}
to {
    opacity: 100%;
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
  background-color: var(--light-grey);
  padding: 1rem;
  border-radius: 4px;
  
  form,
  .boxCadastro {
      
    
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: #f3f3f3;
    h1 {
      margin: 25px 0;
      color: #f3f3f3;
      font-size: 1rem;
    }
    .label {
      margin-bottom: 10px;
      color: var(--black)
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