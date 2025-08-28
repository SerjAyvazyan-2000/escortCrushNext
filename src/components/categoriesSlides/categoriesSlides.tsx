'use client'

import './categoriesSlides.scss'
import {Swiper,SwiperSlide} from "swiper/react";


const CategoriesSlides = () => {
    return <section className='categories-slides-section'>
        <div className='container'>
            <Swiper className='categories-swiper'
                spaceBetween={40}
                slidesPerView={4}
            >
                <SwiperSlide>
                    <div className='categories-slide'>
                        <div className='categories-slide-img'>
                            <img src="/categoriesSlide1.jpg" alt=""/>
                        </div>
                        <p>All inclusive</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categories-slide'>
                        <div className='categories-slide-img'>
                            <img src="/categoriesSlide2.jpg" alt=""/>
                        </div>
                        <p>Feel my passion</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categories-slide'>
                        <div className='categories-slide-img'>
                            <img src="/categoriesSlide3.jpg" alt=""/>
                        </div>
                        <p>Channel 18+</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categories-slide'>
                        <div className='categories-slide-img'>
                            <img src="/categoriesSlide4.jpg" alt=""/>
                        </div>
                        <p>Feel my passion and tenderness</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='categories-slide'>
                        <div className='categories-slide-img'>
                            <img src="/categoriesSlide5.jpg" alt=""/>
                        </div>
                        <p>All inclusive</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    </section>
};

export default CategoriesSlides;