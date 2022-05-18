import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
      --placeholder-text: #868E96;
      --background-primary: #C2D8DA;
      --light-grey: #F3F3F3;
      --black: #070707;
      --dark-blue: #22333B;
      --grey-1: #C4C4C4;
      --green-1: #00F40A;
      --blue-1: #001AFF;
      --blue-2: #3461FF;
      --blue-3: #9FB6F0;
      --red-1: #FB0000;
      --red-2: #752020;
      --green-1: #051B03;
      --card: #908C8C;
    }
    body {
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }
    button {
        font-family: 'Inter', sans-serif;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
    span{

    color: var(--red-1);
    font-size:0.6rem;
    }
    h1,h2,h3,h4 {
        font-weight: 700;
        overflow-wrap: break-word;
    }
    a {
        text-decoration: none;
    }
`;
