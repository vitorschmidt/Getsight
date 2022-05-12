import styled from "styled-components";


export const  Container = styled.div`

text-align: left;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
height:100vh;

picture{
    max-width:350px;
    width:80%;
    min-width:150px;
}

img{
    width:100%;
    
    height:70px;
}
form{
    min-height:50vh;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    gap:10px;
}
`