import styled, { css } from "styled-components";
import {
  HeaderTop,
  Headers,
  ColRight,
  LogoContainer,
  ColLeft,
  Row,
} from "./style.js";

export const HeaderMediaQueries = styled.div`
  ${({ version }) =>
    (version === "home" || version === "homeCandidates") &&
    css`
      @media (max-width: 800px) {
        .btn-back{
              margin-right: 5px;
              margin-left: 0;
             
          }
        ${ColRight} {
          button {
            max-width: 120px;
          }

          a {
            margin: 0;
          }
        }

        ${Row} {
          justify-content: center;
          flex-direction: column;

          ${ColLeft} {
            justify-content: center;
            margin: 0;

            .inputContainer {
              width: 100%;
              max-width: 800px;
            }

            .inputBox {
              max-width: 800px;
            }
          }
          ${ColRight} {
            justify-content: center;

            max-width: none;
          }
        }
      }

      @media (max-width: 600px) {
        button {
          height: 28px;
    
        }

        ${HeaderTop}{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 40px 0;
        }
        ${Headers} {
          flex-direction: column;
      
        }

        ${LogoContainer} {
          display: flex;
          justify-content: center;
        }

        ${ColLeft} {
          justify-content: center;
          margin: 0;

          svg {
            max-width: 180px;
          }
        }

        ${ColRight} {
          justify-content: center;
          align-items: center;
          max-width: 180px;
          margin-top: 10px;

         
        }
      }
    `}

  ${({ version }) =>
    version === "dashboard" &&
    css`
      @media (max-width: 600px) {
        
        a {
          margin: 5px 0;
        }

        ${Headers} {
          flex-direction: column;
          justify-content: center;
          align-items: center;
       
          
         
        }

        ${ColLeft} {
          justify-content: center;
          margin-right: 0;
          max-width: 180px;
        }

        ${ColRight} {
          flex-direction: column;
          justify-content: space-evenly;
          max-width: 180px;
          button {
            width: 100%;
            height: 28px;
            margin: 0;
            
          }
        }
      }
    `}
   ${({ version }) =>
    version === "dashboardCandidates" &&
    css`
      ${HeaderTop} {
        display: none;
      }

      @media (max-width: 800px) {
        ${Headers} {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        ${HeaderTop} {
          display: flex;
          justify-content: flex-end;

          .btn-back {
              margin-right: 15px;
          }

          button{
              margin : 7.5px;
          }

          .btn-exit{
              margin-right: 0;
          }
        }

        ${ColLeft} {
          justify-content: center;
          margin: 0;

          .inputContainer {
            width: 100%;
            max-width: 800px;
          }

          .inputBox {
            max-width: 800px;
          }
        }

        ${ColRight} {
          display: none;
          
        }
      }

      @media (max-width: 700px) {
        

        ${HeaderTop} {
          justify-content: center;
          button {
            height: 28px;

            button{
              margin-right: 15px;
            }
          }
        }

        ${ColLeft} {

          .inputContainer {
            width: 100%;
            max-width: 450px;
          }

          .inputBox {
            max-width: 450px;
          }
        }
      }
    `}

    ${({ version }) =>
    version === "cola" &&
    css`
        flex-wrap: wrap-reverse;
        button{
            margin-top: 5px;
            margin-bottom: 5px;
            min-width: 100px;
        }

       

        @media (max-width: 420px) {
            ${ColRight}{
                display: flex;
                flex-direction: column-reverse;
                justify-content: center;

                button{
                    margin: 0;
                    margin-bottom: 5px;
                }
            }
           
        }
      
    `}
`;
