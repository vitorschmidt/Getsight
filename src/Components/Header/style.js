import styled, {css} from "styled-components";
 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family : "Inter", sans-serif ;
    width: 100%;
    
    height: ${(props)=> props.height};
    background-color: ${(props)=> props.bg};
    padding: 0 25px;
    position: relative;
    
    button{
        padding: 0 15px;
        font-size: clamp(16px, 1.5vw, 18px);
        min-width: 120px;
    }
    a{

        font-size: clamp(12px, 2vw, 16px);
    }

`

export const Headers = styled.header`
    display: flex ;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

 
`


export const ColRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: ${(props)=> props.width};
    padding-right: ${(props)=> props.paddingRight};
    a{
        margin: 0 20px;
        color: #000000;
        font-size: ${(props)=> props.aTagFontSize};
    }
    
    p{
        font-size: ${(props)=> props.pTagFontSize}
    }

    button{
        margin-left: 15px;
    }
    
`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    position: ${(props)=> props.position};
    top: 4px;
    svg{
        width: ${(props)=> props.width};
        max-width: ${(props)=> props.maxWidth};
        height:  ${(props)=> props.height}
    }
   
`

 
export const Input = styled.input`
    display:  ${(props)=> props.desktop ? "block" : "none"};
    width: 100%;
    height: 45px;
     
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding: 0 20px;
    font-size: clamp(14px, 2vw, 18px);
  
    
    &::placeholder{
        color: #808080;
        
    }

    @media (max-width: 1220px) {
        display: ${(props)=> props.mobile ? "block" : "none"};
    }

`
 
export const InputContainer = styled.div`
    width: ${(props)=> props.width};
    display: flex;
    max-width: 800px;
    padding-left: ${(props)=> props.paddingLeft};
    margin-right: 15px;

   

`
export const ElectionType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 160px;
   
    margin:  0 auto;
    border-radius: 12px;
    background-color:#CFE7E9;
    padding: 5px 15px;
    
;
    color: #808080;
    label{
        width: 100%;
        border-bottom: 2px dashed rgba(34, 51, 59, 0.1);
		font-size: clamp(12px,1.6vw,18px);
	
		margin-bottom: 5px;
        text-align: center;
    }

    select{
        background-color: #c2d8da;
;
        border: none;width: 100%;
        border-radius: 5px;
        font-size: 12px;
        color: #808080;
        padding: 0 5px;
        font-family: "Inter", sans-serif;
        &:focus{
            color: black;
        }
    }


     option{
        background-color: #c2d8da;
        color: #22333b;

     }
    
`

export const MediaQueries = styled.div`
       
   


`