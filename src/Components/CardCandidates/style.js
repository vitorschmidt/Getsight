import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #bebcbc;
  margin-bottom: 30px;
  border-radius: 5px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    background-size: contain;
    border-radius: 50%;
    margin-left: 10px;
  }
  
  .informacoes {
    width: 300px;
   
    padding-left: 30px;
  }

  .ocupacao {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .cargo{
    width:143px;
  }
  .name {
    margin-right: 10px;
    font-size:22px;
    min-width:125px;
    font-weight:700;
    color:#22333B;
    
  }

  .historia {
    margin: 10px;
    padding: 20px;
    width: 660px;
    border-radius: 10px;
    background-color: #908c8c;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .historia a {
    color: #000;
  }

  @media (max-width: 500px) {
    padding: 10px 10px;
    
    img {
      width: 50px;
      height: 50px;
    }
   
    .historia {
      display: none;
    }
    .informacoes{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
  }
`;

