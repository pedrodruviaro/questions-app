import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        color: ${props => props.theme.dark};
        background-color: ${props => props.theme.bodyBackground};
    }
`