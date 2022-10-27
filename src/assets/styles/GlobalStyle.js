import { createGlobalStyle } from 'styled-components';
import { scrollbar } from './mixins';
import { breakPoints } from './breakPoints';

export const GlobalStyle = createGlobalStyle`

html {
     box-sizing: border-box;
     font-size: 62.5%;
     line-height: 1;

     @media only screen and (max-width: ${breakPoints.l}) {
        font-size: 55%;
    }
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

    ${scrollbar}
    
}

a, button {
    font-family: 'Roboto', sans-serif;
}

`;
