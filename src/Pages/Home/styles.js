import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-1);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 1101px) {
    align-items: center;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 200px;

  background-color: var(--background-primary);
  border-top: 1px solid var(--black);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2,
  p,
  button {
    margin-left: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40%;

  background-color: var(--light-grey);
  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);

  margin-top: 20px;

  border-radius: 8px;

  button {
    margin: 20px;
  }

  @media (min-width: 1101px) {
    width: 60%;
  }
`;

export const DashDiv = styled.div`
  border-right: 1px solid var(--black);
`;
