import React from 'react';
import './Media.css'

const Media = () => {
    return (
        <div className={''}>
            <h1>Discover a higher level !</h1>
            <div className="row ">
                <div className="col">
                    <iframe className={'col-xl-12 mx-auto mb-1'} height={'315px'}
                            src="https://www.youtube.com/embed/5qap5aO4i9A"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="col">
                    <div className="card media-card bg-transparent">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Title</h2>
                            <h6 className="card-subtitle mb-3 text-muted">Subtitle</h6>
                            <p className="card-text">Sed volutpat nibh quam, ultricies sagittis leo lacinia sit amet.
                                Praesent non malesuada ante, in pellentesque risus. Duis urna nisi, fermentum nec lorem
                                id, hendrerit pellentesque tortor. Fusce varius quis nisi sit amet suscipit. Nulla
                                lacinia dolor suscipit pellentesque posuere.</p>
                            <p className="fw-bold">Mauris sollicitudin vel urna sed eleifend. Donec lacus turpis,
                                faucibus et efficitur et, congue non leo. Pellentesque quis libero vel orci euismod
                                ornare.</p>
                            <a href="https://www.youtube.com/watch?v=5qap5aO4i9A" target={'_blank'}
                               className="btn btn-primary">Check on YT</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Media;