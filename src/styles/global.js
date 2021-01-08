import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bodyColor};
        color: ${({ theme }) => theme.textColor};
    }
`
