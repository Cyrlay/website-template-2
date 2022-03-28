import React from 'react';
import './OurTeam.css'
import StockPhoto1 from '../../images/stock_photo_1.jpg'
import StockPhoto2 from '../../images/stock_photo_2.jpg'
import StockPhoto3 from '../../images/stock_photo_3.jpg'
import StockPhoto4 from '../../images/stock_photo_4.jpg'
import StockPhoto5 from '../../images/stock_photo_5.jpg'
import StockPhoto6 from '../../images/stock_photo_6.jpg'
import StockPhoto7 from '../../images/stock_photo_7.jpg'
import StockPhoto8 from '../../images/stock_photo_8.jpg'



const OurTeam = () => {
    return (

            <div className="container">
                <div className="my-5">
                    <h1>Our Team</h1>
                </div>
                <div className="row justify-content-md-center mx-auto text-center">

                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto1}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image1"/>
                                <div className="content mt-2">
                                    <h4>Uga Buga</h4>
                                    <p className="text-muted">Writer</p>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto2}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image2"/>
                            <div className="content mt-2">
                                <h4>Zaina Knob</h4>
                                <p className="text-muted">Mechanical Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto3}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image3"/>
                                <div className="content mt-2">
                                    <h4>Syndia Lee</h4>
                                    <p className="text-muted">Software Engineer</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto4}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image4"/>
                                <div className="content mt-2">
                                    <h4>Noel Flantier</h4>
                                    <p className="text-muted">Joomla Specialist</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto5}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image5"/>
                                <div className="content mt-2">
                                    <h4>Alan Doe</h4>
                                    <p className="text-muted">Street Artist</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto6}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image6"/>
                            <div className="content mt-2">
                                <h4>Bobby Doe</h4>
                                <p className="text-muted">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto7}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image7"/>
                            <div className="content mt-2">
                                <h4>Lexy Zion</h4>
                                <p className="text-muted">Street Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="img-block mb-5">
                            <img src={StockPhoto8}
                                 className="img-fluid  img-thumbnail rounded-circle" alt="image8"/>
                            <div className="content mt-2">
                                <h4>Nanan Ugab</h4>
                                <p className="text-muted">Idk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default OurTeam;