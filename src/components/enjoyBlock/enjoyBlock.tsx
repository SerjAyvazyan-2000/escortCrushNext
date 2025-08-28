'use client'

import './enjoyBlock.scss'
import Switch from "@/ui/switch/switch";
import {useState} from "react";
import Checkbox from "@/ui/checkbox/checkbox";


const EnjoyBlock = () => {

    const [activeTab, setActiveTab] = useState(2)
    const [selected, setSelected] = useState<string[]>([]);


    const handleClick = (num: number) => {
        setActiveTab(num);
    }


    const handleChange = (value: string) => {
        setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value])
    };


    return <>
        <div className='p-category-header active G-align-center'>
            <div className='G-center'>
                <i className='icon icon-check'></i>
            </div>
            <p>What I Enjoy</p>
        </div>


        <h3 className='p-block-title'>
            Share what’s included in your companionship — and what optional experiences <span className='text-wrap'>you enjoy offering</span>
        </h3>

        <div className='p-enjoy-cnt'>
            <div className='p-enjoy-tabs G-flex'>
                <div onClick={() => handleClick(1)}
                     className={`p-enjoy-tab  ${activeTab === 1 ? 'active' : ''}  G-align-center`}>
                    <div className='G-center'>
                        <i className='icon icon-check'></i>
                    </div>

                    <span>Included in my companionship</span>
                </div>
                <div onClick={() => handleClick(2)}
                     className={`p-enjoy-tab  ${activeTab === 2 ? 'active' : ''} G-align-center `}>
                    <div className='G-center'>
                        <i className='icon icon-check'></i>
                    </div>

                    <span>Optional <span className='text-wrap'>experiences</span></span>
                </div>
            </div>

            <div className='p-enjoy-body'>


                <div className={`my-companionship-wrapper ${activeTab === 1 ? 'active' : ''}`}>
                    <h3 className='p-block-title'>
                        Select the services that are already part of your hourly rate — no surprises, just clarity. At
                        least 1 service must be selected
                    </h3>

                    <div className='my-companionship G-flex'>
                        <div className='e-block-column G-flex-column'>
                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Sex</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch disabled={true} active={true} variant={'orange-switch'}
                                            name={'Classic Sex'}/>
                                    <Switch disabled={true} active={true} variant={'orange-switch'} name={'Kissing'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'}
                                            name={'Blowjob in condom'}/>

                                </div>

                            </div>


                        </div>
                        <div className='e-block-column'>
                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>BDSM</h3>
                                <div className='e-column-switch G-flex-column'>

                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Mistress'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Submissive'}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className={`optional-experiences-wrapper ${activeTab === 2 ? 'active' : ''}`}>
                    <h3 className='p-block-title'>🔒 Don’t worry — this info stays private. It won’t show on your public
                        profile and is only visible to
                        registered guests. It also helps your profile appear in searches for the experiences you
                        enjoy</h3>

                    <div className='optional-experiences G-flex'>
                        <div className='e-block-column G-flex-column'>
                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Romantic Vibes</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch disabled={true} active={true} variant={'orange-switch'}
                                            name={'Deep French 💋'}/>
                                    <Switch disabled={true} active={true} variant={'orange-switch'} name={'GFE'}/>
                                    <Switch variant={'orange-switch'} name={'Striptease'}/>

                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>BJ</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} name={'CBJ'}/>
                                    <Switch variant={'orange-switch'} name={'BBBJ'}/>
                                    <Switch variant={'orange-switch'} name={'DT'}/>
                                    <Switch variant={'orange-switch'} name={'Car BJ'}/>

                                </div>

                            </div>


                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Passion & Chemistry</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Classic'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'DATY'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'69'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'F Seating'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Greek'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'MSOG'}/>


                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Happy End</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'COB'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'CFS'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'CIM'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'CIMWS'}/>
                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Group Play</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'With Girls'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'}
                                            name={'With Couples'}/>

                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Kinks</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Dirty talk'}/>
                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'JOI'}/>
                                    <Switch active={true} variant={'orange-switch'} classNameText={'black-text'}
                                            name={'CEI'}/>

                                    <div className='e-column-checkboxes G-flex-column'>
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Roleplay Styles")}
                                            name="Roleplay Styles"
                                            variant={'orange-checkbox'}
                                        />

                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("I spank you")}
                                            name="I spank you"
                                            variant={'orange-checkbox'}
                                        />


                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("🌰🌰 CBT")}
                                            name="🌰🌰 CBT"
                                            variant={'orange-checkbox'}
                                        />

                                        <div className='e-column-clue column-clue-big'>
                                            <p>Feel free to share more details if you`d like</p>
                                        </div>

                                    </div>


                                    <Switch variant={'orange-switch'} classNameText={'black-text'} name={'Shibari'}/>

                                    <div className='e-column-checkboxes G-flex-column'>
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Tie me up")}
                                            name="Tie me up"
                                            variant={'orange-checkbox'}
                                            className='checkbox-text-light'
                                        />

                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("I tie you")}
                                            name="I tie you"
                                            variant={'orange-checkbox'}
                                            className='checkbox-text-light'

                                        />


                                    </div>

                                    <Switch variant={'orange-switch'} classNameText={'black-text'}
                                            name={'Foot fetish'}/>


                                </div>


                            </div>


                        </div>
                        <div className='e-block-column'>
                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Tease & Play</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} name={'Dirty talk'}/>
                                    <Switch variant={'orange-switch'} name={'JOI'}/>

                                    <Switch variant={'orange-switch'} name={'CEI'}/>
                                    <Switch variant={'orange-switch'} name={'Roleplay Styles'}/>
                                    <div className='e-column-checkboxes G-flex-column'>
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Secretary")}
                                            name="Secretary"
                                            className='checkbox-text-light'
                                        />
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Nurse")}
                                            name="Nurse"
                                            className='checkbox-text-light'
                                        />
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Teacher")}
                                            name="Teacher"
                                            className='checkbox-text-light'
                                        />
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Cosplay")}
                                            name="Cosplay"
                                            className='checkbox-text-light'
                                        />
                                        <Checkbox
                                            onChange={handleChange}
                                            active={selected.includes("Stewardess")}
                                            name="Stewardess"
                                            className='checkbox-text-light'
                                        />
                                    </div>
                                    <Switch variant={'orange-switch'} name={'Leather / Latex'}/>


                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Massage</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} name={'Massage with feet'}/>
                                    <Switch variant={'orange-switch'} name={'Body2Body'}/>

                                    <Switch variant={'orange-switch'} name={'Erotic Massage'}/>
                                    <Switch variant={'orange-switch'} name={'PM'}/>


                                </div>

                            </div>

                            <div className='e-column-item'>
                                <h3 className='e-column-item-title'>Special</h3>
                                <div className='e-column-switch G-flex-column'>
                                    <Switch variant={'orange-switch'} name={'Private Events'}/>
                                    <Switch variant={'orange-switch'} name={'Virtual'}/>

                                    <Switch active={true} variant={'orange-switch'} name={'Photos/videos recording'}/>
                                    <div className='e-column-tag'>
                                        <p>kakieto details</p>
                                    </div>


                                    <Switch active={true} variant={'orange-switch'} name={'Fly me to you'}/>
                                    <div className='e-column-tag column-tag-light'>
                                        <p>Feel free to share more details if you ` d like</p>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>






            </div>


        </div>


    </>
};

export default EnjoyBlock;