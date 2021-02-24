import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

   input, button, ul {
    margin: 0;
	padding: 0;
	
	
}


    body {
        background: ${({ theme }) => theme.bodyColor};
        color: ${({ theme }) => theme.textColor};
    }
`
