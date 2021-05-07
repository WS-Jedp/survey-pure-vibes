import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FaceWrapper = styled(motion.div)`
    position: relative;
    display: inline-flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 1rem;


    & svg {
        width: 72px;
        height: 72px;
        fill: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
        stroke: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};

        & g {
            stroke: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};

            & line {
                stroke: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
            }
            & path {
                stroke: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
            }
            & .inner-circles {
                fill: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
                
            }
        }


        @media (min-width: 720px) {
            width: 90px;
            height: 90px;
        }
    }

    & b {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 1.8rem;
        color: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
    }
`