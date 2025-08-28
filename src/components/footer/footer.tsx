import './footer.scss'
import Link from "next/link";


const Footer = () => {
    return <footer>
        <div className='footer-cnt'>
            <div className='footer-decor'></div>

            <div className='container'>
                <div className='footer-body G-justify-between'>

                    <div className='footer-left-column G-align-start'>

                        <div className='footer-logo-column'>
                            <Link href={'/'}>
                                <img src="/logo.svg" alt=""/>
                            </Link>
                            <p className='footer-clue desktop-block'>© 2025, EscortCrush is a project created for the convenient search of providers, erotic
                                massage
                                models, and escort models throughout the USA.</p>
                        </div>

                        <div className='footer-right-column G-flex-column mobile-block'>
                            <div className='footer-buttons G-align-center'>
                                <button className='footer-login'>
                                    <i className='icon icon-login mobile-block'></i>
                                   <span>Log in</span>
                                </button>

                                <button className='footer-register G-align-center'>
                                    <i className='icon icon-check'></i>
                                    <span>Create profile</span>
                                </button>
                            </div>



                        </div>

                        <nav className='footer-nav'>
                            <ul className='G-flex-column'>
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link href='/'>About the project</Link>
                                </li>
                                <li>
                                    <Link href='/'>Locations</Link>
                                </li>
                                <li>
                                    <Link href='/'>Advertising</Link>
                                </li>
                                <li>
                                    <Link href='/'>Pricing Policy</Link>
                                </li>
                                <li>
                                    <Link href='/'>Contacts</Link>
                                </li>
                                <li>
                                    <Link href='/'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </nav>

                        <p className='footer-clue mobile-block'>© 2025, EscortCrush is a project created for the convenient search of providers, erotic
                            massage
                            models, and escort models throughout the USA.</p>

                        <button className='back-top-btn mobile-block'>Back to top</button>

                    </div>

                    <div className='footer-right-column G-flex-column desktop-block'>
                        <div className='footer-buttons G-align-center'>
                            <button className='footer-login'>Log in</button>

                            <button className='footer-register G-align-center'>
                                <i className='icon icon-check'></i>
                                <span>Create profile</span>
                            </button>
                        </div>

                        <button className='back-top-btn'>Back to top</button>


                    </div>

                </div>
            </div>


        </div>

    </footer>
};

export default Footer;