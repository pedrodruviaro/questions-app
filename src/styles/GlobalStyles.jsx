import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
    }

    body {
        color: ${props => props.theme.dark};
        background-color: ${props => props.theme.bodyBackground};
    }

    p {
        line-height: 1.5;
    }
`