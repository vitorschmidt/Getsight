import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Inter", sans-serif;
  width: 100%;

  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  padding: 1rem;

  button {
    padding: 0 15px;
  }
`;

export const Headers = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  justify-content: space-between;
  width: 100%;
  .teste button{
    margin-left:20px;
  }
  .inputContainer {
    max-width: 350px;
    min-width: 288px;
  }
  .inputBox {
    margin: 0;
    max-width: 350px;
    background-color: var(--light-grey);
  }
`;

export const ColRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-right: ${(props) => props.paddingRight};
  a {
    margin: 0 20px;
    color: #000000;
  }
  p {
    font-size: 1rem;
  }

  @media (min-width: 1101px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    height: 40px;
    max-width: 143px;
  }
`;

// export const Input = styled.input`
//     width: 100%;
//     height: 45px;

//     border: none;
//     border-radius: 8px 0px 0px 8px;
//     padding: 0 20px;
//     font-size: clamp(10px, 1.6vw, 18px);

//     &::placeholder{
//         color: #808080;

//     }
// `

export const Description = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  justify-content: space-between;
  font-size: 1rem;
`;
