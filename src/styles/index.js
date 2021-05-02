import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;700&display=swap');

    :root {
        font-size: 62.5%;

        --color-dark: #101217;
        --color-light: #E6DFF5;
        --color-bg: #FCE5FF;
        --color-valid: #6DFF8F;
        --color-error: #FF6D6D;

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
        font-size: 4.2rem;

        @media (min-width: 720px) {
            font-size: 5.4rem;
        }
    }
    h2 {
        font-size: 3.2rem;
        @media (min-width: 720px) {
            font-size: 4.2rem;
        }
    }
    h3 {
        font-size: 2.4rem;
        @media (min-width: 720px) {
            font-size: 3rem;
        }
    }
    h4 {
        font-size: 2rem;
        @media (min-width: 720px) {
            font-size: 2.4rem;
        }
    }

    /* Texts */
    p, small, a, i, b {
        font-family: 'Noto Sans JP';
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.9rem;
    }
    b {
        font-weight: 700;
    }

    /* Form Inputs */
    input[type="number"] {
        color: var(--color-dark);
        border: none;
        border-bottom: 1px solid rgba(0,0,0,.6);
        margin: .6rem 0;
        font-family: 'Noto Sans JP', sans-serif;
        outline: none;
        transition: .3s ease-in-out;
        &:focus {
            border-bottom: 2px solid var(--color-dark); 
        }
    }

    
`  