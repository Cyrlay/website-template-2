import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SponsorCardTemplate from '../../images/sponsor_card_template.jpg'
import SponsorCardTemplate2 from '../../images/sponsor_card_template_2.jpg'
import SponsorCard from "../SponsorCard/SponsorCard";

const responsive = {
    0: { items: 1 },
    576: {items: 2},
    768: {items: 2},
    992: { items: 3},
    1200: { items: 4},
    1400: { items: 6},
};

const items = [
    <div className={"item"} data-value="1">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="2">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="3">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="4">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="5">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="6">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
    <div className={"item"} data-value="7">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="8">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="9">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="10">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="11">
        <SponsorCard
            img={SponsorCardTemplate}
            text={'Some quick example text.'}
        />
    </div>,
    <div className="item" data-value="12">
        <SponsorCard
            img={SponsorCardTemplate2}
            text={'Some quick example text.'}
        />
    </div>,
];

const CardSlider = () => {
    return (
        <AliceCarousel
            infinite={true}
            keyboardNavigation={true}
            disableButtonsControls={true}
            autoPlayInterval={1500}
            autoPlayStrategy={"action"}
            autoPlay={true}
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate" />
    );
}

export default CardSlider;