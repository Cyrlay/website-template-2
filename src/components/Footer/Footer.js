import React from 'react';
import './Footer.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';

const Footer = () => {
    return (
        <div className={'footer text-center text-lg-start text-muted mt-5'}>

            <section className="d-flex justify-content-center p-4 border-bottom border-top text-light text-center">

                <div className={'social-media-section text-dark'}>
                    <a href="" className="me-4 text-reset">
                        <i><FacebookIcon/></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i><TwitterIcon/></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i><GoogleIcon/></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i><InstagramIcon/></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i><LinkedInIcon/></i>
                    </a>
                    <a href="https://github.com/Cyrlay" target={'_blank'} className="me-4 text-reset">
                        <i><GitHubIcon/></i>
                    </a>
                </div>

            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-dark">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Lorem Ipsum
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed magna posuere,
                                ullamcorper mi sed, suscipit diam. Quisque ultricies erat sit amet risus laoreet, eget luctus nibh tristique.
                                Duis luctus pellentesque facilisis. Morbi tristique nulla urna, a ultrices turpis facilisis vitae.
                                Vivamus placerat facilisis placerat.
                            </p>
                        </div>

                        <div className="products-section col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-dark">

                            <h6 className="text-uppercase fw-bold mb-4 text-decoration-none">
                                Products
                            </h6>
                            <p>
                                <a href="#" className="text-decoration-none fw-bold">Product 1</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none fw-bold">Product 2</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none fw-bold">Product 3</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none fw-bold">Product 4</a>
                            </p>
                        </div>

                        <div className="useful-links-section col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-dark">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#" className="text-decoration-none">Link 1</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none">Link 2</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none">Link 3</a>
                            </p>
                            <p>
                                <a href="#" className="text-decoration-none">Link 4</a>
                            </p>
                        </div>

                        <div className="contact-section col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-dark">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <i><HomeIcon/></i> Warsaw, 00-001, Poland
                            </p>
                            <p>
                                <i><EmailIcon/></i> info@example.com
                            </p>

                            <p>
                                <i><PhoneIcon/></i> +48 111 222 333
                            </p>
                            <p>
                                <i><FaxIcon/></i> +48 333 222 111
                            </p>

                            <div/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'copyright text-dark border-top'}>
                <div className="text-center p-3 display-6">© {new Date().getFullYear()} Copyright
                    <a className="text-reset fw-bold copyright-name text-decoration-none" target={'_blank'} href="https://github.com/Cyrlay"><span> Cyrlay</span></a>
                </div>
            </section>

        </div>
    )
}

export default Footer;