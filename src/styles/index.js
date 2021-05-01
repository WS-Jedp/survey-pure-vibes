import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;700&display=swap');

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
        font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
        color: var(--color-dark);
    }

    /* Titles */
    h1, h2, h3, h4, h5 {
        font-family: 'Montserrat';
        font-weight: 900;
    }

    h1 {
        font-size: 7.2rem;
    }
    h2 {
        font-size: 6rem;
    }
    h3 {
        font-size: 3rem;
    }

    /* Texts */
    p, small, a, i, b {
        font-family: 'Noto Sans JP';
        font-weight: 400;
        font-size: 1.8rem;
    }
    b {
        font-weight: 900;
        font-size: 2.1rem;
    }
`  