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
    animation: shadow-drop-tb 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes shadow-drop-tb {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
   box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.75), 0 12px 20px -12px rgba(0, 0, 0, 0.75);
  }
}

  }
`;
