import styled from "styled-components";

export const Container = styled.button`
  width: ${(props)=> props.width ? props.width : "120px"};
  max-width: ${(props)=> props.maxWidth};

  height: ${(props)=> props.height ? props.height : "40px"};

  background-color: ${(props) => props.backGround};
  color: ${(props) => props.textColor};
  border-radius: ${(props)=> props.borderRadius ? props.borderRadius : "4px"};
  :hover {
    background-color: ${(props) => props.backGroundHover};
  }
`;
