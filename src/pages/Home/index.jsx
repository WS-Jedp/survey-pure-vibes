import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HomeWrapper, IntroductionWrapper, InformationWrapper, HomeNavWrapper } from './styles'
import { LayoutStage } from '../../layouts/stage'


import { Button } from '../../components/Button'
import { Paragraph } from '../../components/paragraph'
import { Footer } from '../../components/footer'



export const Home = () => {

    const [isHiddenMain, setIsHiddenMain] = useState(false)
    const { push } = useHistory() 

    return (
        <LayoutStage>
            <HomeWrapper>
                <IntroductionWrapper isHidden={isHiddenMain}>
                    <h1>
                        BREAKING POVERTY CYCLES
                    </h1>
                    <h3>
                        With our HELP CHAIN FUND
                    </h3>
                    <p>
                    We are a <b>Child Rights organization</b> focusing on breaking adolescents out of poverty cycles.
                    </p>
                    <iframe src="https://www.youtube.com/embed/1vN-z377DGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> 
                    <Button title="Start Survey" action={() => push('/poverty')} />
                </IntroductionWrapper>
                <InformationWrapper isHidden={isHiddenMain}>
                    <Paragraph 
                        title="Are you ready?"
                        content="Hello and welcome to our Survey! 
                        By taking this survey, you can help us identify the best subscription solutions for our community."
                    />
                    <Paragraph 
                        title="Our Community"
                        content={(<>We are a <b>Child Rights organization</b> focusing on breaking adolescents out of poverty cycles.</>)}
                    />
                    <Paragraph 
                        title="Fun Fact"
                        content="Netflix U.S has about 67 million subscribers—> if each subscriber contributed 1 month of Netflix to a charity cause, there would be 659,340,000 million dollars available to support Children’s Rights. "
                    />
                    <Footer />
                </InformationWrapper>
            </HomeWrapper>
            <HomeNavWrapper>
                <small onClick={() => setIsHiddenMain(false)}>
                    {
                        !isHiddenMain ? (<b>Survey</b>) : ('Survey')
                    }
                </small>
                <small onClick={() => setIsHiddenMain(true)}>
                    {
                        isHiddenMain ? (<b>About</b>) : ('About')
                    }
                </small>
            </HomeNavWrapper>
        </LayoutStage>
    )
}