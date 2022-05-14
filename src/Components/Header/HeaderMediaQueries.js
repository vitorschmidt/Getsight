import styled, {css} from "styled-components"
import { Headers, LogoContainer, InputContainer, ColRight, ElectionType } from "./style.js"

export const HeaderMediaQueries = styled.div`
    ${({version})=> version === "home" && css`
            a{
                margin: 0 10px 0 40px;
            }

        @media (max-width: 700px){
            

            ${LogoContainer}{
                max-width: 200px;
            }
           
            ${ColRight}{
                
                button{
                    max-width: 120px;
                    height: 35px;
                }
            }
        }
        
    
    
    `}

    ${({version})=> version === "dashboard" && css`
        
    
    `}

    ${({version})=> version === "dashboardCandidates" && css`
        a{
            display: none;
        }

        ${ElectionType}{
            display: none;
        }

        @media (max-width: 750px){
            a{
                display: block;
                align-self: flex-end;
                margin: 10px 0;
                color: black;
            }

            ${Headers}{
                flex-direction: column;
            }

            ${InputContainer}{
                input{
                    height: 35px;
                    font-size: 12px;
                }

                button{
                    max-width: 100px;
                    font-size: 12px;
                    height: 35px;
                    
                }

            }

            ${ColRight}{
                width: 100%;
                justify-content: flex-end;
                padding-right: 0;
                margin-top: 10px;

                button{
                    display: none;
                    
                };


                ${ElectionType}{
                    display: block;
                    margin: 0;

                    min-width: 120px;
                    label{
                        display: none;

                    }

                    select{
                        font-size: 12px;
                        background-color: transparent;
                    }
                
                    
                }
                
            }

            ${InputContainer}{
                width: 100%;
                margin-right: 0;
                padding-left: 0;
            }
            
        }
    
    `}



    ${({version})=> version === "homeCandidates"  && css`
        @media (max-width: 900px) {
            

            button{
                max-width: 120px;
                
            }
        
        }

        @media (max-width: 750px){
            ${LogoContainer}{
                display: none;
            }

            ${Headers}{
                flex-direction: column;
            }

            ${InputContainer}{
                width: 100%;
                margin-right: 0;
                padding-left: 0;
            }

            ${ColRight}{
                width: 100%;
                justify-content: flex-end;
                padding-right: 0;
                margin-top: 10px;

                button{
                    display: none;
                    
                };


                ${ElectionType}{
                    margin: 0;
                    min-width: 120px;
                    label{
                        display: none;

                    }

                    select{
                        font-size: 12px;
                        background-color: transparent;
                    }
                
                
                    
                }

            
                
            }
            
        }

        @media (max-width: 425px){
            ${InputContainer}{
                input{
                    height: 35px;
                    font-size: 12px;
                }

                button{
                    font-size: 12px;
                    height: 35px;
                    
                }

            }
           

            ${ElectionType}{
                min-width: 120px;
                padding: 0 5px;
                label{
                    display: none;

                }

                select{
                    font-size: 12px;
                    background-color: transparent;
                }
            }
          
        }

        @media (max-width: 340px){
            ${InputContainer}{
                button{
                    min-width: 80px;
            
                }

            }

        }
        
        
    `}



`