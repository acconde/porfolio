/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';

class Contact extends Component {
    
    render() {
        
        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="contact-page-item">
                                <h2>My Contacts</h2>
                                <p>I am always ready to be a part of your project! Message me now and lest build awesome stuffs.</p>
                                <div className="adress">
                                    <h3>Address</h3>
                                    <span>Brgy. Paya, Giporlos, Eastern Samar, 6811</span>
                                </div>
                                <div className="phone">
                                    <h3>Phone</h3>
                                    <span>+63-917-116-5529</span>
                                </div>
                                <div className="email">
                                    <h3>Email</h3>
                                    <span><a href="mailto:alexiscellconde@gmail.com">alexiscellconde@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>Quick Contact Form</h2>
                                <div className="contact-form">
                                    <form method="post" className="contact-validation-active" id="contact-form">
                                        <div className="half-col">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="half-col">
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone"/>
                                        </div>
                                        <div className="half-col">
                                            <input type="text" name="address" id="address" className="form-control" placeholder="Address"/>
                                        </div>
                                        <div>
                                            <textarea className="form-control" name="note"  id="note" placeholder="Your Massage..."></textarea>
                                        </div>
                                        <div className="submit-btn-wrapper">
                                            <button type="submit" className="theme-btn-s3">Submit</button>
                                            <div id="loader">
                                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                            </div>
                                        </div>
                                        <div className="clearfix error-handling-messages">
                                            <div id="success">Thank you</div>
                                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.8331134826765!2d125.48676154448304!3d11.117248335091444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xffc1453dadfe5da9!2sAlexis%20Graphix%20and%20Computer%20Data%20System!5e1!3m2!1sen!2sph!4v1667551382436!5m2!1sen!2sph"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;