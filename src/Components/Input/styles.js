import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

//REVISAR CORES PARA QUE FIQUE MAIS ALINHAS AO PROJETO

export const InputContainer = styled.div`
  background: var(--background-primary);
  border-radius: 4px;
  border: 2px solid #f3f3f3;
  color: #070707;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  /* transition: ; */
  &:focus-within {
    border: 2px solid black;
  }
  input {
    width: 100%;
    height: 38px;
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    padding: 1rem;
    color: var(--back);
    &::placeholder {
      color: var(--placeholder-text);
      font-size: 0.8rem;
    }
  }

  //EDITAR CORES AO USAR UM SELECT
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #070707;
    -webkit-box-shadow: none;
    transition: background-color 86400s;
  }
  //COR DO ICON
  svg {
    color: black;
    cursor: pointer;
  }
`;
