import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {

    }
    body {
        font-size: 1rem;
    }
    button {
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
    
    h1,h2,h3,h4 {
        font-weight: 700;
    }
    a {
        text-decoration: none;
    }
`;
