import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
     box-sizing: border-box;
     font-size: 62.5%;
}

*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

body {
    font-family: 'Roboto', sans-serif;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.tintSecondary.light1};
}

a, button {
    font-family: 'Roboto', sans-serif;

}

`;
