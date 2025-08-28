'use client'


import './whyChooseUs.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';



const WhyChooseUs = () => {
    const whyChooseData = [
        {
            img: '/whyChooseimg1.svg',
            title: 'Fast Verification',
            text: 'Get verified in 24 hours, no long waits.',
        },
        {
            img: '/whyChooseimg2.svg',
            title: 'Mutual Screening',
            text: 'Both clients and models review each other to build trust',
        },
        {
            img: '/whyChooseImg3.svg',
            title: 'Privacy First',
            text: 'Your data is safe. Encrypted, offshore, and untouchable.',
        },
        {
            img: '/whyChooseImg4.svg',
            title: 'Budget-Friendly Ads',
            text: 'Better AD Rates than on other escort sites',
        },
        {
            img: '/whyChooseImg5.svg',
            title: 'Promotion that works',
            text: 'Whether you\'re new or just getting back — our system helps you to get noticed!',
        },
        {
            img: '/whyChooseImg6.svg',
            title: '24/7 Support',
            text: 'Talk to real caring people, anytime.',
        },
    ]


    return <div className='why-choose-block'>
         <h2 className='why-choose-title'>Why Models Choose Us</h2>

        <div className='why-choose-list G-flex desktop-block'>
            {whyChooseData.map((item, index) => (
                <div className="why-choose-item G-flex" key={index}>
                    <div className="why-choose-img G-flex">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="why-choose-texts">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>


        {whyChooseData.length > 0 &&
            <div className='why-choose-mobile mobile-block'>

                <Swiper
                        modules={[Navigation]}
                        className='choose-mobile-slider'
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                >
                    {whyChooseData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="why-choose-item G-flex" key={index}>
                                <div className="why-choose-img G-flex">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="why-choose-texts">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>

                {/*<div className="swiper-custom-nav">*/}
                {/*    <div className="swiper-button-prev-custom">*/}
                {/*        <i className='icon icon-arrow'></i>*/}
                {/*    </div>*/}
                {/*    <div className="swiper-button-next-custom">*/}
                {/*        <i className='icon icon-arrow'></i>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>

        }
    </div>
};

export default WhyChooseUs;