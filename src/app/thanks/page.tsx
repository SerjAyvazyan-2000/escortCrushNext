import React from 'react';
import './page.scss'
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/button/button";

const Page = () => {
    return <div className='v-thanks-block last-section'>
        <div className='container'>
            <div className='v-thanks-body G-column-center'>
                <div className='v-thanks-icon G-flex'>
                    <Image width={155} height={155} src={'/thanqsIcon.webp'} alt={'img'}/>
                </div>
                <div className='thanks-texts G-flex-column'>
                    <h2 className='thanks-section-title section-title'>Thanks, Gorgeous — Your Profile Sent for Approval!!</h2>

                    <p>
                        We’ll check everything within 24 hours and you’ll get an email once it’s approved (or if we need
                        you to make any changes)
                    </p>
                    <p>
                        You may check the status of your registration in your personal account and also edit your
                        advertising profile.
                    </p>
                    <p>
                        Thanks for waiting — you`re gonna shine soon!
                    </p>
                </div>

                <div className='thanks-back-link'>
                    <Button text={' Personal account'} href={'/profile'} variant={'btn-orange-gradient'}/>

                </div>
            </div>

        </div>
    </div>
};

export default Page;