import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root {
        font-size: 62.5%;

        --color-dark: #101217;
        --color-light: #E6DFF5;
        --color-gray: #707070;
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
        font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
    }

    a {
        color: var(--color-dark)
    }

    body {
        font-size: 1.8rem;
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

    textarea {
        width: 80%;
        color: var(--color-dark);
        border: 1px solid rgba(0,0,0, .6);
        margin: .6rem 0;
        font-family: 'Noto Sans JP', sans-serif;
        outline: none;
        transition: .3s ease-in-out;
        padding: 1.5rem;
        border-radius: 21px; 
        font-size: 1.8rem;

        @media(min-width: 720px) {
            width: 50%;
        }
    }

    input[type="text"], input[type="email"], input[type="date"] {
        width: 80%;
        height: 42px;
        border-radius: 21px;
        color: var(--color-dark);
        border: 1px solid rgba(0,0,0, .6);
        margin: .6rem 0;
        font-family: 'Noto Sans JP', sans-serif;
        outline: none;
        transition: .3s ease-in-out;
        padding: 1.5rem;
        @media(min-width: 720px) {
            border-radius: 30px;
            width: 66%;
            height: 51px;
            font-size: 1.8rem;
            padding: 2rem;
        }

    }

    input[type="radio"] {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        color: var(--color-dark);
        min-width: 110px;
        width: 110px;
        max-width: 110px;
        min-height: 110px;
        height: 110px;
        max-height: 110px;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 12px .6px rgba(0,0,0,.1);

        @media (min-width: 720px) {
            min-width: 140px;
            width: 140px;
            max-width: 140px;
            min-height: 140px;
            height: 140px;
            max-height: 140px;
        }
    }

    .link {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    
`  