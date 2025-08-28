'use client'

import './myGirlfriends.scss'
import InputBlock from "@/shared/inputBlock/inputBlock";
import GirlfriendCard from "@/components/girlfriendCard/girlfriendCard";


const MyGirlfriends = () => {




    return <div className='my-girlfriends-block p-block'>
        <div className='p-category-header active G-align-center'>
            <div className='G-center'>
                <i className='icon icon-check'></i>
            </div>
            <p>My Crush Girlfriends</p>
        </div>


        <div className='girlfriends-add-block'>
            <div className='girlfriends-add-input G-align-end'>
                <InputBlock  name={'name'} variant={'lightPeach'}/>
                <div className='g-add-icon G-center'>
                    <i className='icon icon-union'></i>
                </div>
            </div>

            <p>If you have a friend on this site you’re available for lesbian shows or threesomes with, enter her work name here — we’ll let clients know you’re available as a duo</p>

            <div className='girlfriends-add-clue G-align-center'>
                <i className='icon icon-info'></i>
                <p>You may add up to 3 girlfriends, choose wisely!</p>
            </div>
        </div>

        <div className='girlfriends-cards G-flex'>
            <GirlfriendCard/>
        </div>




    </div>
};

export default MyGirlfriends;