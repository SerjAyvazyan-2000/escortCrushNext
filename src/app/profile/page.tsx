'use client'

import './page.scss'
import ProfileSidebar from "@/shared/profile-sidebar/profile-sidebar";
import Checkbox from "@/ui/checkbox/checkbox";
import InputBlock from "@/shared/inputBlock/inputBlock";
import ModelAttributes from "@/components/model-attributes/model-attributes";
import {useState} from "react";
import EnjoyBlock from "@/components/enjoyBlock/enjoyBlock";
import Switch from "@/ui/switch/switch";
import MyGirlfriends from "@/components/myGirlfriends/myGirlfriends";
import Select from "@/ui/select/select";
import Button from "@/ui/button/button";
import VerticalStepper from "@/components/vertical-stepper/vertical-stepper";
import PlaceholderTextarea from "@/ui/placeholderTextarea/placeholderTextarea";


export default function Profile() {
    const [selected, setSelected] = useState<string | null>('Escorts');
    const [city, setCity] = useState<string[]>([]);
    const [hovered, setHovered] = useState<string | null>(null);
    const [text, setText] = useState("");


    const cityOptions = [
        {
            value: 'Штат Florida - города Miami, Orlando, Tampa, Fort Lauderdale',
            label: 'Штат Florida - города Miami, Orlando, Tampa, Fort Lauderdale'
        },
        {value: 'Штат Nevada - города Las Vegas, Reno', label: 'Штат Nevada - города Las Vegas, Reno'},
        {
            value: 'Штат New York - города New York City, Buffalo, Albany',
            label: 'Штат New York - города New York City, Buffalo, Albany'
        },
    ];

    const handleChange = (val: string) => {
        setSelected(val);
    };


    const categories = [
        {
            name: 'BDSM',
            info: 'To be listed in the BDSM category, some of your photos must show BDSM attributes, and your profile description should reflect that you belong in this category.',
        },
        {
            name: 'Stars',
            info: 'To be listed in the Pornstars category, you must add links to your videos on Pornhub, OnlyFans, or other adult platforms. A moderator will check the links to make sure the girl in the videos matches the one being verified.',
        },
        {
            name: 'Erotic massage',
            info: `
            To be listed in the Erotic Massage category, your profile description must clearly show that you belong in this category. This category means you offer erotic massage, but it does not include sexual services. If you plan to offer various sexual services, you should choose The Escorts category instead, and list erotic massage as an extra skill.`,
        },
        {
            name: 'Trans',
        },
    ];

    const steps = [
        {title: 'Fill your advertising profile'},
        {title: 'Upload your identity document and verification video'},
        {title: 'Your profile approved'},
        {title: 'Make your first top up and unblock your 100$ bonus'},
    ];
    const currentStep = 1;

    return (
        <section className='profile-section'>
            <div className='container'>
                <div className='profile-body G-flex'>
                    <ProfileSidebar/>

                    <div className='profile-info-body'>
                        <div className='profile-promotion G-align-center'>
                            <div className='p-promotion-icon G-flex'>
                                <img src="/promotionImg.svg" alt=""/>
                            </div>
                            <p>Get $100 on your CrushBalance — just sign up, verify your ID and make your first
                                top-up!</p>

                            <i className='icon icon-union'></i>
                        </div>

                        <div className='profile-cnt-wrapper G-flex'>
                            <div className='profile-main-cnt'>
                                <h3 className='profile-page-title'>Fill out Advertising Profile</h3>

                                <div className='choose-category'>
                                    <div className='p-category-header active G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Choose your category</p>
                                    </div>
                                    <div onMouseLeave={() => setHovered(null)} className='choose-category-cnt G-flex'>


                                        <div className='choose-category-items G-flex-column'>

                                            {categories.map(cat => (
                                                <div key={cat.name} className="choose-category-item G-align-center">
                                                    <Checkbox
                                                        onChange={handleChange}
                                                        name={cat.name}
                                                        active={selected === cat.name}
                                                    />

                                                    {cat.info &&
                                                        <i
                                                            className={`icon icon-info`}
                                                            onMouseEnter={() => setHovered(cat.name)}

                                                        />
                                                    }


                                                </div>
                                            ))}


                                        </div>


                                        {categories.map((cat, i) => (
                                            <div key={i}>
                                                {hovered === cat.name && (
                                                    <div className="c-category-info">
                                                        <p>{cat.info}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <div className='work-nickname'>
                                    <div className='work-nickname-input G-align-end'>
                                        <InputBlock inputTitle={'Work Nickname*'} name={'name'} variant={'lightPeach'}/>
                                        <div className='w-nickname-edit G-center'>
                                            <i className='icon icon-edit2'></i>
                                        </div>
                                    </div>

                                    <p className='input-clue'>30 characters max. Keep it classy, sexy and simple</p>
                                </div>


                                <div className='p-upload-block p-block'>
                                    <div className='p-category-header G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Upload your gallery photos</p>
                                    </div>

                                    <div className='upload-texts-block G-flex-column'>
                                        <p>
                                            <strong>Show Your Best Side</strong> - these are the images clients will see
                                            in
                                            your ads. Drag a
                                            photo to the first position to make it your main one. Please upload between
                                            5
                                            and 25 photos to complete your gallery. The more photos you upload, the more
                                            eyes you’ll catch!
                                        </p>

                                        <p>
                                            <strong className='text-wrap'>Photo Rules</strong> Keep it sexy, not
                                            explicit.
                                            <span className='text-wrap'>✅ Erotic photos are welcome — but no
                                        close-up shots of genitals or porn-style content</span>
                                            ✅ All photos must be original,
                                            aesthetic, and truly represent you
                                            <span className='text-wrap'>🚫 No heavy retouching, AI images, watermarks,
                                        tags or digits, or someone else’s pics</span>
                                        </p>

                                        <p>
                                            Violating these rules can get your profile permanently suspended. We’re here
                                            to
                                            protect real models and real clients.
                                        </p>
                                    </div>


                                    <div className='upload-images-block '>
                                        <div className='uploaded-images G-flex'>

                                            <div className='uploaded-img-wrapper '>
                                                <div className='uploaded-img uploaded-error'>
                                                    <img src="/uploadedImg.jpg" alt=""/>
                                                    <div className='uploaded-success G-center'>
                                                        <i className='icon icon-check'></i>
                                                    </div>

                                                    <div className='remove-block G-center'>
                                                        <i className='icon icon-union'></i>
                                                    </div>


                                                </div>
                                                <p>Main Profile Photo</p>
                                            </div>


                                            <div className='uploaded-img-wrapper'>
                                                <div className='uploaded-img '>
                                                    <img src="/uploadedImg.jpg" alt=""/>

                                                    <div className='uploaded-success G-center'>
                                                        <i className='icon icon-check'></i>
                                                    </div>

                                                    <div className='remove-block G-center'>
                                                        <i className='icon icon-union'></i>
                                                    </div>
                                                </div>
                                            </div>


                                            <label className='upload-img-label  G-center'>
                                                <input type="file"/>
                                                <i className='icon icon-add'></i>
                                            </label>


                                        </div>

                                        <div className='upload-errors G-flex-column'>
                                            <div className='upload-error G-align-start'>
                                                <i className='icon icon-info'></i>
                                                <p>You need at least 5 photos to complete your gallery.</p>
                                            </div>

                                            <div className='upload-error G-align-start'>
                                                <i className='icon icon-info'></i>
                                                <p>You’ve reached the maximum of 25 photos. Please remove some before
                                                    uploading more.. </p>
                                            </div>

                                            <div className='upload-error G-align-start'>
                                                <i className='icon icon-info'></i>
                                                <p>This photo can’t be uploaded. Please, make sure its under 8MB </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className='attributes-block p-block'>
                                    <ModelAttributes/>

                                </div>


                                <div className='p-upload-block p-block'>
                                    <div className='p-category-header active G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Upload your promo video</p>
                                    </div>

                                    <div className='upload-texts-block G-flex-column'>
                                        <p>
                                            <strong className='text-wrap'>Why Add a Promo Video?</strong> It shows your
                                            vibe, your voice, your confidence — things photos just can’t capture.

                                        </p>

                                        <p>
                                            It can be a pro shoot or something casual on your iPhone — totally up to
                                            you.
                                            What matters most is that it feels real and personal
                                        </p>

                                        <p>

                                            <span className='text-wrap'>Please follow these guidelines:</span>
                                            <span className='text-wrap'>✅ Your video must:</span>
                                            Only you on camera — no other
                                            people, voices, or pets <span className='text-wrap'>Clear face and voice, good lighting</span>
                                            10–60 sec, under
                                            100MB <span className='text-wrap'>1080p at 30fps (edit if 4K/60fps</span>
                                            <span
                                                className='text-wrap'>🚫 Avoid:</span>
                                            Use AI, filters, or heavy edits
                                            <span className='text-wrap'>Include nudity or explicit scenes</span> Show
                                            background noise, mess, or others (even
                                            off-camera)
                                        </p>
                                    </div>

                                    <div className='upload-videos-block '>
                                        <div className='uploaded-videos G-flex'>

                                            <div className='uploaded-video-wrapper G-align-center'>

                                                <div className='uploaded-video-icon G-flex'>
                                                    <img src="/videoIcon.png" alt=""/>
                                                </div>

                                                <div className='uploaded-video-text G-flex-column'>
                                                    <p>IMG_0002.MOV</p>
                                                    <p>2.35 Mb</p>
                                                </div>

                                                <div className='uploaded-success video-success G-center'>
                                                    <i className='icon icon-check'></i>
                                                </div>

                                                <div className='remove-block G-center'>
                                                    <i className='icon icon-union'></i>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>


                                <div className='p-rates-block p-block'>
                                    <div className='p-category-header active G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Your rates</p>
                                    </div>


                                    <h3 className='p-block-title'>At least one field must be filled out before you
                                        continue</h3>

                                    <div className='rates-columns G-flex'>
                                        <div className='rates-column'>
                                            <h3 className='rates-column-title'>Incall</h3>

                                            <div className='rates-column-inputs G-flex-column'>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ 1 hour:'} variant={'lightPeach'}
                                                            placeholder='-'/>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ 2 hour:'} variant={'lightPeach'}
                                                            placeholder='-'/>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ night:'} variant={'lightPeach'}
                                                            placeholder='-'/>

                                            </div>
                                        </div>

                                        <div className='rates-column'>
                                            <h3 className='rates-column-title'>Outcall</h3>

                                            <div className='rates-column-inputs G-flex-column'>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ 1 hour:'} variant={'lightPeach'}
                                                            placeholder='500'/>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ 2 hour:'} variant={'lightPeach'}
                                                            placeholder='900'/>
                                                <InputBlock name={'hour'} className='attribute-input'
                                                            inputTitle={'$/ night:'} variant={'lightPeach'}
                                                            placeholder='2500'/>

                                            </div>
                                        </div>

                                    </div>

                                    <div className='more-options-block '>
                                        <div className='more-options-btn G-align-center'>
                                            <button>More options</button>
                                            <i className='icon icon-info'></i>
                                        </div>

                                        <div className='more-options-inputs G-align-center'>
                                            <InputBlock name={'hour'} variant={'lightPeach'} className='attribute-input'
                                                        inputTitle='$/ 30min:'/>
                                            <InputBlock name={'hour'} variant={'lightPeach'} className='attribute-input'
                                                        inputTitle='$/ 3+1hr:'/>
                                            <InputBlock name={'hour'} variant={'lightPeach'} className='attribute-input'
                                                        inputTitle='$/ 5+2hrs:'/>

                                        </div>


                                    </div>
                                </div>


                                <div className='p-enjoy-block p-block'>
                                    <EnjoyBlock/>

                                </div>


                                <div className='p-policy-block '>
                                    <div className='p-category-header G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Tell Your Clients About Your Deposit Policy</p>
                                    </div>

                                    <h3 className='p-block-title'>
                                        This helps set expectations and avoid misunderstandings
                                    </h3>




                                    <PlaceholderTextarea
                                        value={text}
                                        onChange={setText}
                                        placeholderContent={
                                            <>
                                                <p>Please share:</p>
                                                <ul>
                                                    <li>Do you require a deposit to confirm a meeting?</li>
                                                    <li>How much is it?</li>
                                                    <li>What payment methods do you accept?</li>
                                                </ul>
                                            </>
                                        }
                                    />

                                </div>


                                <div className='p-policy-block '>
                                    <div className='p-category-header G-align-center'>
                                        <div className='G-center'>
                                            <i className='icon icon-check'></i>
                                        </div>
                                        <p>Let Your Clients Know About Your Cancellation Policy</p>
                                    </div>

                                    <h3 className='p-block-title'>
                                        Life happens — but your time matters.
                                    </h3>





                                    <PlaceholderTextarea
                                        value={text}
                                        onChange={setText}
                                        placeholderContent={
                                            <>
                                                <p>Please share:</p>
                                                <ul>
                                                    <li>What are the conditions on cancellation, re-schedule or refund (if any)?
                                                    </li>
                                                    <li>Will the deposit be refunded if the client cancels?</li>
                                                    <li>🚫 What happens in case of no-shows or last-minute changes?</li>
                                                </ul>
                                            </>
                                        }
                                    />

                                </div>


                                <div className='p-policy-block '>
                                    <InputBlock iconCheck={true} name={'number'} variant={"lightPeach"}
                                                inputTitle={'My working phone number'} tagP={'' +
                                        'For privacy reasons, we highly recommend to use a separate phone number for work.'}
                                                className='attribute-input number-input'/>


                                    <div className='message-you-block '>
                                        <div className='message-title-wrapper G-align-center'>
                                            <div className='G-center'>
                                                <i className='icon icon-check'></i>
                                            </div>

                                            <p>How can clients message you (besides message on the
                                                site)?</p>
                                        </div>

                                        <div className='message-switches G-flex-column'>
                                            <Switch variant={'orange-switch'} classNameText={'black-text'}
                                                    name={'SMS'}/>
                                            <div className='message-switch G-align-center'>
                                                <Switch variant={'orange-switch'} classNameText={'black-text'}
                                                        name={'WhatsApp'}/>
                                                <i className='icon icon-info'></i>
                                                <p>Make sure your WhatsApp number are linked to your work number</p>
                                            </div>

                                            <div className='message-switch G-align-center'>
                                                <Switch active={true} variant={'orange-switch'}
                                                        classNameText={'black-text'}
                                                        name={'Telegram'}/>
                                                <i className='icon icon-info'></i>
                                                <p>Make sure your Telegram number are linked to your work number</p>
                                            </div>

                                            <label className='message-input'>
                                                <input type="text" placeholder='What is your telegram Nickname ?'/>
                                            </label>
                                        </div>
                                    </div>


                                    <div className='message-template-block'>
                                        <div className='message-title-wrapper G-align-center'>
                                            <div className='G-center'>
                                                <i className='icon icon-check'></i>
                                            </div>

                                            <p>Message Template</p>
                                        </div>
                                        <div className='message-template'>
                                            <div>
                                                Hey <input className='template-big-input' type="text"/>, I saw you on
                                                EscortCrush. My name is <input className='template-big-input'
                                                                               type="text"/> and I`d like to see you
                                                on <input
                                                className='template-small-input' type="text"/> for <input
                                                className='template-small-input'
                                                type="text"/> hours.
                                            </div>
                                        </div>

                                        <p className='message-template-tag'>When clients send you messages on SMS,
                                            WhatsApp
                                            or Telegram, this template will be automatically applied.</p>
                                    </div>
                                </div>


                                <MyGirlfriends/>


                                <div className='p-location-block G-flex-column'>

                                    <div className='p-location-selects'>
                                        <div className='p-category-header p-location-header G-align-center'>
                                            <div className='G-center'>
                                                <i className='icon icon-check'></i>
                                            </div>
                                            <p>My location</p>
                                        </div>

                                        <Select
                                            label="City"
                                            required
                                            options={cityOptions}
                                            value={city}
                                            onChange={setCity}
                                            className='big-select'
                                            placeholder="Please select the city you’re currently in"
                                        />

                                        <p className='p-location-text'>
                                            If you`re planning to change your city for a trip, please do it only once
                                            you`re
                                            physically there — keeps things real and respectful
                                        </p>
                                    </div>


                                    <div className='p-location-zip'>
                                        <InputBlock name={'zip'} inputTitle={'Zip Code'} iconCheck={true}
                                                    variant={'lightPeach'}/>

                                        <p className='p-location-text'>
                                            Why add your ZIP code?
                                            <span
                                                className='text-wrap'>It helps nearby clients find and choose you.</span>
                                            Don’t worry, it’s just for showing your approximate location on the map (not
                                            your exact address). Being visible in the right area = more bookings, less
                                            confusion, and faster connection
                                        </p>
                                    </div>


                                    <div className='p-map-block'>
                                        <div className='p-map-wrapper G-align-center'>
                                            <div className='G-center'>
                                                <i className='icon icon-check'></i>
                                            </div>
                                            <p className='p-map-title'>Please mark your approximate location on the map
                                                — it
                                                helps nearby clients choose you</p>
                                        </div>

                                        <div className='p-map'>
                                            <iframe
                                                src="https://www.google.com/maps/embed/v1/place?q=80-01%20Metropolitan%20Ave%2C%20Middle%20Village%2C%20NY%2011379&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                                height="302"
                                                width={'100%'}
                                                style={{border: 0, borderRadius: '5px'}}
                                                allowFullScreen={true}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"

                                            />

                                        </div>

                                    </div>


                                    <div className='p-social-block '>
                                        <div className='p-category-header G-align-center'>
                                            <div className='G-center'>
                                                <i className='icon icon-check'></i>
                                            </div>
                                            <p>Your Socials Links</p>
                                        </div>

                                        <h3 className='p-block-title'>
                                            <strong> Wanna be listed as a Pornstar?</strong>
                                            <span className='text-wrap'>
                                            Drop your links to Pornhub, OnlyFans, or anywhere
                                        else you’re showing off your talents Our team will double-check that the star in
                                        the videos is really you — so make sure the spotlight matches the ID!
                                        </span>
                                        </h3>

                                        <div className='p-social-inputs G-flex-column'>
                                            <InputBlock name={'social'} inputTitle={'X (formerly Twitter)'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>
                                            <InputBlock name={'social'} inputTitle={'Website/linktree'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>

                                            <InputBlock name={'social'} inputTitle={'Onlyfans'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>

                                            <InputBlock name={'social'} inputTitle={'Instagram'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>
                                            <InputBlock name={'social'} inputTitle={'Tiktok'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>
                                            <InputBlock name={'social'} inputTitle={'Pornhub'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>

                                            <InputBlock name={'social'} inputTitle={'Snapchat'}
                                                        className={'attribute-input'}
                                                        variant={'lightPeach'} placeholder='Enter link'/>
                                        </div>

                                        <div className='message-textarea-block '>
                                            <div className='message-title-wrapper G-align-center'>
                                                <div className='G-center'>
                                                    <i className='icon icon-check'></i>
                                                </div>
                                                <p>One-Liner Bio*</p>
                                            </div>

                                            <h3 className='about-me-title'>
                                                One-Liner Bio will show up next to your working name in search results
                                                with
                                                other models
                                            </h3>

                                            <textarea className='textarea'
                                                      placeholder='Example: Sultry blonde with a soft touch and a wild side 👀'>

                                       </textarea>
                                            <p className='textarea-clue'>Maximum 80–100 characters</p>

                                        </div>


                                        <div className=' message-textarea-block'>
                                            <div className='message-title-wrapper G-align-center'>
                                                <div className='G-center'>
                                                    <i className='icon icon-check'></i>
                                                </div>
                                                <p>More About Me*</p>
                                            </div>

                                            <h3 className='about-me-title'>
                                                A short description helps clients feel your vibe, understand your style,
                                                and
                                                know what makes you you. It’s your space to shine, flirt a little, and
                                                stand
                                                out from the crowd.
                                            </h3>

                                            <textarea className='textarea'
                                                      placeholder='Generate your BIO with AI” to get a custom template based on everything you’ve already filled in. But don’t stop there — adding a personal touch will make your profile feel more real, unique, and irresistible to clients.'>

                                       </textarea>

                                            <p className='textarea-clue'>Minimum 250 characters</p>


                                        </div>


                                    </div>


                                </div>


                                <div className='profile-send-tolls G-flex-column'>

                                    <Button variant={'btn-border'} text={'Generate your BIO with AI'}/>
                                    <Button variant={'btn-orange-gradient'} text={'Save and Start ID Verification'}/>
                                </div>

                                <div className='page-errors-cnt G-align-start'>
                                    <i className='icon icon-info'></i>
                                    <div className='page-errors-text'>
                                        <p>Please complete the following sections before submitting: </p>
                                        <ul>
                                            <li>Main Photos (5 required),</li>
                                            <li>Promo Video,</li>
                                            <li>Body Attributes,</li>
                                            <li>Languages.</li>
                                        </ul>
                                    </div>
                                </div>


                            </div>


                            <div className='profile-stepper'>
                                <VerticalStepper currentStep={currentStep} steps={steps}/>

                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
};

