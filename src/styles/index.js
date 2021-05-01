import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;

        --color-dark: #101217;
        --color-light: #E6DFF5;
        --color-bg: #FCE5FF;


        --space-sm: 6rem;
        --space-md: 12rem;
        --space-bg: 21rem;
        --space-lg: 36rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    a {
        color: var(--color-dark)
    }

    body {
        font-size: 1.8rem;
        font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`  