'use client'

import './girlfriendCard.scss'


const GirlfriendCard = () => {


    return <div className='girlfriend-card '>

        <div className='g-card-main G-flex'>
            <div className='g-card-img G-flex'>
                <img src="/gCardImg.png" alt=""/>

                <div className='g-card-close G-center'>
                    <i className='icon icon-union'></i>
                </div>

                <div className='g-img-tolls G-align-center'>
                    <div className='g-video G-center'>
                        <i className='icon icon-play'></i>
                    </div>

                    <div className='g-review G-align-center'>
                        <i className='icon icon-review'></i>
                        <span>11</span>
                    </div>
                </div>


            </div>

            <div className='g-description'>
                <div className='g-description-info G-flex-column'>
                    <div className='g-descr-item G-align-center'>
                        <p>Age:</p>
                        <span>28</span>
                    </div>
                    <div className='g-descr-item G-align-center'>
                        <p>Breast:</p>
                        <span>M</span>
                    </div>
                    <div className='g-descr-item G-align-center'>
                        <p>Body:</p>
                        <span>Slim</span>
                    </div>
                    <div className='g-descr-item G-align-center'>
                        <p>Height:</p>
                        <span>5`5`</span>
                    </div>
                </div>

                <div className='g-tags G-flex'>
                    <button className='active'>Independent</button>
                    <button>Anal</button>
                    <button>GFE</button>
                    <button>Blowjob</button>
                    <button>MMF</button>

                </div>
            </div>
        </div>

        <div className='g-card-tolls'>
            <div className='g-card-titles'>
                <h3>Girl Name</h3>
                <p>
                    <span>Philadelphia</span>
                    <span>PA</span>
                </p>
            </div>

            <div className='g-card-contacts G-align-center'>
                <button >
                    <i className='icon icon-tel '></i>
                    <span>Show mobile</span>
                </button>

                <button>
                    <span>Message me</span>
                </button>
            </div>
            <div className='g-spend-times G-flex'>
                <div className='g-spend-time G-align-center'>
                    <div className='g-time G-align-center'>
                        <i className='icon icon-time1'></i>
                        <p>hour</p>
                    </div>
                    <p className='g-time-price'>$200</p>
                </div>


                <div className='g-spend-time G-align-center'>
                    <div className='g-time G-align-center'>
                        <i className='icon icon-time2'></i>
                        <p>hours</p>
                    </div>
                    <p className='g-time-price'>$400</p>
                </div>

                <div className='g-spend-time G-align-center'>
                    <div className='g-time G-align-center'>
                        <i className='icon icon-moon'></i>
                        <p>all night</p>
                    </div>
                    <p className='g-time-price'>$700</p>
                </div>



            </div>


        </div>


    </div>
};

export default GirlfriendCard;