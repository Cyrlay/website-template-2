import React from 'react';
import './SponsorCard.css'

const SponsorCard = (props) => {
    return (

/*<div className={'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-1'}>*/
<div className={'ms-1 me-1 mx-auto mb-1'}>
        <div className="card sponsor-card" align={'center'}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.text}
                    </p>
            </div>
        </div>
</div>
    );
};

export default SponsorCard;