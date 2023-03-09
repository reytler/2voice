import { createGlobalStyle } from 'styled-components';

export const GlobalStyles =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'verdana', sans-serif;
        font-size: 22px;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;