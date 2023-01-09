import React, { Component } from 'react';
import serviceImg_1 from '../Assets/Images/gallery/GNY-web-370x400-DisTicaret.jpg';
import serviceImg_2 from '../Assets/Images/gallery/VoIP_1.jpg-1-370x400.png';
import serviceImg_3 from '../Assets/Images/gallery/network-maintenance-370x400.png';
import serviceImg_4 from '../Assets/Images/gallery/Image-for-Workgrid-370-x-400.webp';
import serviceImg_5 from '../Assets/Images/gallery/web-370x400.jpg';
import serviceImg_6 from '../Assets/Images/gallery/vicidial2-370x400.png';

class Service extends Component {
    render () {
        return (
            <div id="service" className="hx-service-area ptb-100-70">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <span>What I Do</span>
                            <h2>My Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_2} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>Web Design</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_1} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>Web Development</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_3} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>Server Administration</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_4} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>Responsive Design</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_5} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>Network Design</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 grid col-12">
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={serviceImg_6} alt="W"/>
                                    </div>
                                    <div className="hx-service-content">
                                        <p>I am Expert In</p>
                                        <h3>IT Solutions Consultancy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;