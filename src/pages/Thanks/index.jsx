import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { HomeWrapper, IntroductionWrapper, InformationWrapper, HomeNavWrapper } from './styles'
import { LayoutStage } from '../../layouts/stage'

import { SurveyContext } from '../../context/SurveyContext'
import { addReview } from '../../db'

import { motion } from 'framer-motion'
import { leftToRightVariants, containerVariants, smoothTransision, upToDownVariants, rightToLeftVariants } from '../../styles/animations'

import { Footer } from '../../components/footer'
import { ButtonSubmit } from '../../components/Button/ButtonSubmit'
import { Loading } from '../../components/loading'

export const Thanks = () => {

    const { user } = useContext(SurveyContext)

    const { register, formState: { errors }, handleSubmit  } = useForm()

    const [isHiddenMain, setIsHiddenMain] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [isReviewed, setIsReviewed] = useState(false)

    const submitOpinion = async data => {
        const review = {
            user: { name: "Juanes", email: "jedp082@gmail.com" },
            review: data.opinion
        }
        setIsLoading(true)
        await addReview(review)
        setIsLoading(false)
        setIsReviewed(true)
    }

    return (
        <LayoutStage>
            <HomeWrapper>
                <IntroductionWrapper isHidden={isHiddenMain} variants={containerVariants} transition={smoothTransision}  initial="hidden" animate="visible" exit="exit" >
                    <div>
                        <motion.h1 variants={leftToRightVariants} >
                            THANK YOU SO MUCH!
                        </motion.h1>
                        <motion.p  variants={leftToRightVariants}>
                            We know that together  we can change the life of millions of children!
                        </motion.p>
                        <motion.p  variants={leftToRightVariants}>
                            Are curious to see what we are up to? <br />  
                            Visit our Instagram Page <a className="link" target="_blank" href="https://www.instagram.com/purevibesglobal/">@purevibesglobal</a> <br />
                        </motion.p>
                    </div>

                    <div>
                        <motion.b variants={leftToRightVariants}>
                            Want to get directly in touch? 
                        </motion.b>
                        <br />
                        <motion.b variants={leftToRightVariants}>
                            Email: info@purevibesglobal.com 
                        </motion.b>
                        <br />
                        <motion.b variants={leftToRightVariants}>
                            Empowering Children, Empowering Humanity
                        </motion.b>
                    </div>

                </IntroductionWrapper>

                <InformationWrapper isHidden={isHiddenMain} variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                    <motion.form variants={leftToRightVariants} onSubmit={handleSubmit(submitOpinion)}>
                        <label htmlFor="opinion">
                            Any  Comments, Concerns, or suggestions you may have would be greatly appreciated. Again, Thank you!
                        </label>
                        <textarea 
                            {...register("opinion", { required: true })} 
                            placeholder="Write your opinion (Optional)"
                            id="opinion"
                        />
                        {
                            errors.opinion && (
                                <small>
                                    This field is required!
                                </small>
                            )
                        }
                        
                        {
                            isLoading ? (<Loading message="Adding Your Feedback 😁" />) : 
                                isReviewed ? (
                                    <small style={{color: "var(--color-dark)"}}>
                                        Thanks For Your Feedback! 💘
                                    </small>
                                ) : (
                                    <ButtonSubmit 
                                        title="Send"
                                    />
                                )
                        }
                    </motion.form>
                    <Footer variants={rightToLeftVariants} />
                </InformationWrapper>
            </HomeWrapper>
            <HomeNavWrapper>
                <small onClick={() => setIsHiddenMain(false)}>
                    {
                        !isHiddenMain ? (<b>Thanks</b>) : ('Thanks')
                    }
                </small>
                <small onClick={() => setIsHiddenMain(true)}>
                    {
                        isHiddenMain ? (<b>Suggests</b>) : ('Suggests')
                    }
                </small>
            </HomeNavWrapper>
        </LayoutStage>
    )
}