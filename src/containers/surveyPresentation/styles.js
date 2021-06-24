import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SurveyPresentationWrapper = styled(motion.section)`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: auto;
    min-height: 80vh;
    position: relative;
    justify-content: space-around;
    overflow: hidden;

    .survey-presentation {

        &__title {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            width: 100%;
            text-align: center;


            & p {
                width: 90%;
                margin: .7rem 0;
            }


            @media (min-width: 1080px) {
                & p {
                    width: 60%;
                    padding: 1rem;
                }

                & p, b {
                    font-size: 1.9rem;
                }
            }
        }

        &__content {
            position: relative;
            width: 100%;
            padding: 1rem;
        }

        &__button {
            position: relative;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            margin: 1rem 0;            
        }
    }
`
export const SurveyPresentationFormWrapper = styled(motion.form)`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: auto;
    min-height: 80vh;
    position: relative;
    justify-content: space-around;
    overflow: hidden;

    .survey-presentation {

        &__title {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            width: 100%;
            text-align: center;
            margin-bottom: 1.2rem;

            & p {
                width: 60%;
                padding: 1rem;
            }

            & p, b {
                font-size: 2rem;
            }
        }

        &__content {
            position: relative;
            width: 100%;
            padding: 1rem;
        }

        &__button {
            position: relative;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
        }
    }
`