import React from 'react';

const NewsCard = (props) => {
    return (
        <div className={'single-card'}>
            <div className="card ms-5 me-5 mb-2">
                <div className="card-header">
                    {props.newsDate}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;