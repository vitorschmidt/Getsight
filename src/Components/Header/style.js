import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family : "Inter", sans-serif ;
    width: 100%;
 
    height: ${(props)=> props.height};
    background-color: ${(props)=> props.bg};
    padding: 0 25px;

    button{
        padding: 0 15px;
       
    }

`

export const Headers = styled.header`
    display: flex ;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: ${(props)=> props.position};

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
    }
    
    p{
        font-size: ${(props)=> props.fontSize}
    }

`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    position: ${(props)=> props.position};
    bottom: 48px;
    svg{
        width: ${(props)=> props.width};
        max-width: ${(props)=> props.maxWidth};
        height:  ${(props)=> props.height}
    }
   
     
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
     
    border: none;
    border-radius: 8px 0px 0px 8px;
    padding: 0 20px;
    font-size: clamp(10px, 1.6vw, 18px);
     
    
    &::placeholder{
        color: #808080;
        
    }
`

export const InputContainer = styled.div`
    width: ${(props)=> props.width};
    display: flex;
    max-width: 800px;
    padding-left: ${(props)=> props.paddingLeft};

`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:  0 40px;
    font-size: 18px;
    
    .positionTop{
        position: absolute;
        bottom: 48px;
        
    }
`


