import React, { Component } from 'react';
import aboutImg from '../Assets/Images/avataaars.png';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Full Stack Web Developer</span>
                                    <h2>About Me</h2>
                                </div>
                                <p>There is no such thing as impossible for me, I am eager to work hard as it will eliminate the impossible task, and I love challenges.</p>
                                <p>I am the type of person that may not able to learn fast, but can deliver the task at it finest level as possible.</p>
                                
                                <div className="btns">
                                    <a href="https://drive.google.com/file/d/1UT3Tvaa3z07kWoIsqBKDPlqXCw3ZFdPA/view?usp=share_link" target="_blank" rel="noreferrer" className="theme-btn">Download CV</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg} alt="about"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;