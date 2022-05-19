import styled from "styled-components";


export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
   
    width: 100%;
    height:480px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
  
    `
    export const Row = styled.div`
        width: 100%;
        img{
            max-width: 100px;
             
        }
    `

    export const Description= styled.div`
        p{
            font-weight: 400;
            font-size: 0.7rem;
            color: var(--placeholder-text);
            text-align: justify;
            letter-spacing: 0.25px;
        
        }
    `
    export const Content = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        margin-right: 10px;
        height: 100%;
        position: relative;

    h2 {
        font-size: 0.8rem;
        text-align: left;
        margin: 5px 0;
    }
  
    span {
        font-size: 0.6rem;
        font-weight: 700;
        color: var(--red-2);
        position: absolute;
        top: 100%;
    }

    @media (min-width:1100px){
        width: 100%;
        height:350px;
    }
`
