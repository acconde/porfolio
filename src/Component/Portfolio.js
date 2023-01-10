import React, { Component } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Assets/Images/gallery/GNY-web-370x400-DisTicaret.jpg';
import Gallery_2 from '../Assets/Images/gallery/VoIP_1.jpg-1-370x400.png';
import Gallery_3 from '../Assets/Images/gallery/network-maintenance-370x400.png';
import Gallery_4 from '../Assets/Images/gallery/web-370x400.jpg';
import Gallery_5 from '../Assets/Images/gallery/vicidial2-370x400.png';
import Gallery_6 from '../Assets/Images/gallery/Image-for-Workgrid-370-x-400.webp';


class Portfolio extends Component {

    state = {
        onWebDesign: false,
        onWebApp: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }


        console.log(this.state.onWebDesign);

        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Work I Have Done</h2>
                                </div>
                                <ul>
                                    <li><a data-filter="*" href="https://www.facebook.com/lexxus11/" className="current" onClick={allElement}>All</a></li>
                                    <li><a data-filter=".Web-Design" href="https://www.facebook.com/lexxus11/" onClick={webDesign}>Web Design</a></li>
                                    <li><a data-filter=".Web-Application" href="https://www.facebook.com/lexxus11/" onClick={webApp}>Web Application</a></li>               
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                               
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                   <img src={Gallery_1} className="img img-responsive" alt="" />
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_2} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_6} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <a href="https://www.facebook.com/lexxus11/" className="view-icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;