import React from 'react';
import './Home.css'
import Faq from "../Faq/Faq";
import CardSlider from "../CardSlider/CardSlider";
import Media from "../Media/Media";
import OurTeam from "../OurTeam/OurTeam";

const Home = () => {
    return (
        <div className={'home'}>

            <section className={'introduction w-50 container text-center mt-5 mb-5'}>
                <h1 className={'display-1 fw-bold'}>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna blandit pretium
                    rutrum. Fusce ultricies dignissim neque, eget dapibus sapien dictum consectetur. Proin eu egestas
                    neque. Sed non nunc eget quam consequat molestie. Donec finibus commodo imperdiet.</p>

                <div className="container">
                    <div className="row">
                        <div className="col text-center col-sm-12 col-lg-6" align={'center'}>
                            <button type={'button'} className={'btn btn-primary btn-lg mb-1 text-nowrap w-100'}
                                    defaultValue={'button'}>Try now!
                            </button>
                        </div>
                        <div className="col text-center col-sm-12 col-lg-6" align={'center'}>
                            <button type={'button'} className={'btn btn-primary btn-lg mb-1 text-nowrap w-100'}
                                    defaultValue={'button'}>Newsletter!
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'sponsors w-100 text-center mt-5 mb-5'}>
                <h1>Sponsors</h1>
                <CardSlider/>
            </section>

            <section className={'media container text-center mt-5 mb-5'}>
                <Media/>
            </section>

            <section className={'faq container text-center mt-5 mb-5'}>
                <Faq/>
            </section>

            <section className={'our-team mt-5 text-center mb-5'}>
                <OurTeam/>
            </section>

        </div>
    )
}

export default Home;