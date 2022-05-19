import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  padding: 10px 16px;

  width: 100%;
  height: 100%;
  min-height: 80px;
  max-height: ${(props) => props.maxHeight};

  background-color: ${(props) => props.bg};

  font-family: "Inter", sans-serif;

  button {
    font-size: clamp(16px, 1.5vw, 18px);
  }

  a {
    font-size: clamp(12px, 2vw, 16px);
  }

  p {
    font-weight: 700;
    word-break: break-all;
    text-transform:capitalize;
  }
`;

export const LogoContainer = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  cursor: pointer;
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.version === "homeCandidates" ? "space-between" : "flex-start"};
  align-items: center;
  width: 100%;
  height: 40px;

  margin-bottom: 5px;
`;

export const Headers = styled.header`
  display: flex;
  flex-direction: ${({ version }) =>
    version === "home" ? "row" : version === "homeCandidates" ? "column" : ""};

  justify-content: space-between;
  align-items: center;

  input {
    font-size: clamp(14px, 2vw, 18px);
  }

  .inputContainer {
    max-width: 350px;
  }
  .inputBox {
    margin: 0;
    max-width: 800px;

    background-color: var(--light-grey);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ColLeft = styled.div`
  display: flex;
  margin-right: 15px;

  width: 100%;
  max-width: ${(props) => props.maxWidth};

  justify-content: space-between;
  width: 100%;
  .teste button {
    margin-left: 20px;
  }
  .inputContainer {
    max-width: 350px;
  }
  .inputBox {
    margin: 0;
    max-width: 350px;
    background-color: var(--light-grey);
  }
`;

export const ColRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  max-width: ${(props) => props.maxWidth};

  a {
    margin: 0 20px;

    font-size: ${(props) => props.aTagFontSize};
    color: #000000;
  }

  p {
    font-size: ${(props) => props.pTagFontSize};
  }

  button {
    margin-left: 15px;
  }
`;
export const ElectionType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 10px 0;
  color: #808080;
  height: 42px;

  label {
    width: 100%;
    font-size: clamp(12px, 1.6vw, 14px);
  }

  select {
    width: 100%;
    padding: 0 5px;
    border-radius: 4px;
    background-color: #c2d8da;
    font-size: 12px;
    font-family: "Inter", sans-serif;
    color: #808080;
    height: 100%;
    border: 1px solid;

    &:focus {
      color: black;
    }
  }

  option {
    background-color: #c2d8da;
    color: #22333b;
  }
`;
