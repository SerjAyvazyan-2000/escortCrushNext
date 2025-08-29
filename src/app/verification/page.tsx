import './page.scss'
import VerticalStepper from "@/components/vertical-stepper/vertical-stepper";
import Image from "next/image";
import Button from "@/ui/button/button";


const Verification = () => {

    const steps = [
        {title: 'Fill your advertising profile'},
        {title: 'Upload your identity document and verification video'},
        {title: 'Your profile approved'},
        {title: 'Make your first top up and unblock your 100$ bonus'},
    ];
    const currentStep = 2;


    return <section className='verification-section last-section'>
        <div className='container'>
            <h2 className='section-title desktop-block'>EscortCrush Verification</h2>

            <div className='verification-body G-flex'>
                <div className='verification-min-cnt'>
                    <div className='verification-titles'>
                        <h2>Upload Your ID & Selfie with ID</h2>
                        <p>
                            Upload two photos: (1) a clear photo of your government-issued ID or passport, and (2) a
                            selfie of you holding that same document.
                        </p>
                    </div>

                    <div className='v-examples-block'>
                        <h3>Examples</h3>

                        <div className='v-examples-items G-flex'>
                            <div className='v-example-img'>
                                <Image width={180} height={270} objectFit={'cover'} src={'/passport1.webp'}
                                       alt={'img'}/>
                            </div>

                            <div className='v-example-img'>
                                <Image width={180} height={270} objectFit={'cover'} src={'/passport2.webp'}
                                       alt={'img'}/>
                            </div>
                        </div>
                    </div>


                    <div className='v-upload-block '>
                        <div className='v-uploaded-images G-flex'>

                            <div className='v-uploaded-wrapper '>
                                <div className='v-uploaded-img '>
                                    <img src="/passport1.webp" alt=""/>
                                    <div className='v-uploaded-success G-center'>
                                        <i className='icon icon-check'></i>
                                    </div>

                                    <div className='v-remove-block G-center'>
                                        <i className='icon icon-union'></i>
                                    </div>


                                </div>
                                <p>Your ID photo</p>
                            </div>


                            <div className='v-uploaded-wrapper '>
                                <label className='v-upload-label  G-center'>
                                    <input type="file"/>
                                    <i className='icon icon-add'></i>
                                </label>
                                <p>Your ID photo</p>
                            </div>
                        </div>


                    </div>


                    <div className='v-upload-video-block'>

                        <div className='verification-titles'>
                            <h2>Upload your Verification Video</h2>
                            <p>
                                Record Your Quick Verification Video 🎥
                            </p>
                        </div>

                        <div className='v-video-description G-flex-column'>
                            <p>
                                To help keep EscortCrush safe, secure, and scam-free, we ask each model to complete a
                                short video check — it only takes a moment!
                            </p>

                            <div className='v-video-texts'>
                                <p>📹 <strong>In your video, please:</strong></p>
                                <ul>
                                    <li>• Stand in clear view (full body if possible)</li>
                                    <li>• Hold your <strong>government-issued ID</strong></li>
                                    <li>• Hold a sheet of paper with:</li>
                                    <a> • Your <strong>full name</strong></a>
                                    <a> • Today’s <strong>date</strong></a>
                                    <a> • Your EscortCrush profile ID</a>
                                    <a> • The phrase: “For registration on EscortCrush.com”</a>
                                    <li>• Say out loud:</li>
                                    <a>“My name is [your name], I am [your age] years old, and this is my verification
                                        video for EscortCrush.”</a>
                                </ul>
                            </div>


                            <p>
                                💡 Keep it short — just <strong>15 seconds,</strong> under <strong>100MB</strong>
                                For best results, record in 1080p at 30fps
                            </p>

                            <p>
                                <strong>🔒 Private & Secure:</strong> This video is encrypted, stored safely offshore, and permanently
                                deleted after review. Only our moderators see it — it’s never shared or posted.
                            </p>
                        </div>



                        <button className='view-video'>View example video for verification</button>


                        <div className='v-video-uploaded '>
                            <label className='v-upload-label  G-center'>
                                <input type="file"/>
                                <i className='icon icon-add'></i>
                            </label>
                        </div>

                        <div className='v-submit'>
                            <Button  variant={'btn-orange-gradient'} text={'Submit Documents & Start Bank Card Verification'}/>
                        </div>



                    </div>

                </div>

                <h2 className='section-title mobile-block'>EscortCrush Verification</h2>

                <VerticalStepper steps={steps} currentStep={currentStep}/>
            </div>

        </div>


    </section>
};

export default Verification;