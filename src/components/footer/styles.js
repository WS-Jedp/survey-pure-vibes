import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterWrapper = styled(motion.footer)`
    width: 100%;
    height: auto;
    padding: 1.5rem;

    & .social-media {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;

        & a {
            margin-right: 1rem;

            & svg {
                width: 27px;
                height: 27px;

                @media (min-width: 720px) {
                    width: 21px;
                    height: 21px;
                }
            }
        }
    }

    & small {
        font-size: 1.2rem;
        opacity: .6;
    }
`