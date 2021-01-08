import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

   input, button {
  margin: 0;
	padding: 0;
	
	
}

    body {
        background: ${({ theme }) => theme.bodyColor};
        color: ${({ theme }) => theme.textColor};
    }
`
