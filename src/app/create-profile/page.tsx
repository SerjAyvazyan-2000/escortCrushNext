'use client'

import './page.scss'
import Link from 'next/link'
import {useState} from "react";
import WhyChooseUs from "@/shared/whyChooseUs/whyChooseUs";
import InputBlock from "@/shared/inputBlock/inputBlock";
import Button from "@/ui/button/button";




export default function CreateProfile(){



    const [currentStep, setCurrentStep] = useState(1)





    const handleStep1 = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep(1)
    }

    const handleStep2 = () => {
        setCurrentStep(2)
    }
    const handleStep3 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };



    return <section className='create-profile-section  first-section last-section'>
        <div className='container'>

            <div className='create-profile-body G-flex'>

                <div className='create-profile-column'>


                    {currentStep === 1  &&

                        <div className='profile-column-left'>
                            <div className='client-model-tabs G-align-center'>
                                <button>I am a client</button>
                                <button className='active'>I am a model</button>
                            </div>

                            <form className='create-profile-form' action="">
                                <h3 className='form-title'>Create profile</h3>


                                <div className='p-form-inputs G-flex-column'>
                                    <InputBlock variant={"white"} inputTitle={'Work Nickname'} name={'name'} tagP={'30 characters max,'} tagSpan={'21 characters left'}/>
                                    <InputBlock variant={"white"}  inputTitle={'Email address'} name={'email'} />

                                </div>

                                <div className='form-actions G-flex-column'>
                                    <div className='form-agree G-align-center'>
                                        <div className='form-agree-icon'></div>
                                        <p>I’m over 18, I agree to the terms, and I’m here for real connections</p>
                                    </div>


                                    <Button onClick={handleStep2}  variant={'btn-orange-gradient'} text={'Create profile'}/>

                                </div>


                            </form>
                        </div>
                    }

                    {currentStep === 2 &&
                        <div className='profile-column-left'>
                            <div className='client-model-tabs G-align-center'>
                                <button>I am a client</button>
                                <button className='active'>I am a model</button>
                            </div>

                            <form className='create-form-step2 G-flex-column' action="">


                                <div className='p-form-inputs G-flex-column'>
                                    <InputBlock variant={'white'} inputTitle={'Enter the code sent to your email'} name={'email'}
                                               />
                                </div>

                                <p className='p-form-tag'>No code yet? Check your inbox (and spam), or <Link href="/">resend a new
                                    confirmation code</Link></p>



                                <Button onClick={handleStep3}  variant={'btn-orange-gradient'} text={'Become our model'}/>


                            </form>

                        </div>

                    }


                    {currentStep === 2 &&
                        <div className='profile-column-left another-way G-flex-column'>
                            <div className='another-way-tag G-align-start'>
                                <i className='icon icon-info'></i>
                                <p>
                                    Sometimes your email provider gets a little jealous and blocks messages from
                                    Escortcrush 💌 Let’s try a different address!
                                </p>
                            </div>


                            <Button onClick={handleStep1}  variant={'btn-border'} text={'Sign up with a different email address'}/>

                        </div>

                    }


                    <div className='p-promotion G-align-center'>
                        <div className='promotion-img G-center'>
                            <img src="/promotionImg.svg" alt=""/>
                        </div>
                        <p>Get $100 on your CrushBalance — just sign up, verify your ID and make your first top-up!</p>
                    </div>


                </div>


                <div className='create-profile-column'>
                    <WhyChooseUs/>
                </div>

            </div>
        </div>

    </section>
}

