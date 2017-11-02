import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';

import FooterSection from './FooterSection.js'

import phone from '../assets/phone.svg'
import tracking from '../assets/tracking-grey.svg'
import calculator from '../assets/weight-and-volume-calculator-grey.svg'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "sections": [
                {
                    'title': 'OCEAN FREIGHT',
                    'links': [
                        "What do we do for you...",
                        "FCL (Full Containers)",
                        "LCL or grouping",
                        "Import/Export",
                        "High Volume",
                        "TECO for inland origin..."
                    ]
                },
                {
                    'title': 'AIR FREIGTH',
                    'links': [
                        "What do we do for you...",
                        "Import/Export",
                        "High Volume"
                    ]
                },
                {
                    'title': 'MOVING SHIPPING',
                    'links': [
                        "What do we do for you...",
                        "Individuals",
                        "Relocation moving..."
                    ]
                },
                {
                    'title': 'OTHER SERVICES',
                    'links': [
                        "Our Platform",
                        "Personalized service",
                        "Documentation and...",
                        "Payment processing",
                        "Cargo Insurance",
                        "Paleting services"
                    ]
                },
                {
                    'title': 'HELP',
                    'links': [
                        "Help for Ocean Freight",
                        "Help for air freight",
                        "Help for international..."
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <footer className="container-fluid footer section">
                <Row className="justify-content-between">
                    <Col xs="12" lg="6" xl="5" className="footer--phone">
                        <Row className="justify-content-center">
                            <Col xs="1">
                                <img className="footer--img" src={phone} alt="contact number" />
                            </Col>
                            <Col xs="auto">
                                <span>USA +1 305 964 8731</span>
                            </Col>
                            <Col xs="auto">
                                <span>SPAIN +34 91 198 09 90</span>
                            </Col>
                        </Row>
                    </Col>

                    <Col  xs="12" lg="auto" className="footer--social">
                        <a href="https://twitter.com/">
                            <span className="fa-stack fa-lg footer--social--img twitter">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a href="https://www.facebook.com">
                            <span className="fa-stack fa-lg footer--social--img facebook">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com">
                            <span className="fa-stack fa-lg footer--social--img linkedin">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </Col>
                </Row>
                <hr />
                <Row>
                    {this.state.sections.map(function(section){
                        return <FooterSection title={section.title} links={section.links} />;
                    })}
                </Row>
                <Row>
                    <Col xs="12" md="3" lg="2">
                        <a href="#">
                            <img className="footer--img" src={tracking} alt="tracking" />
                            <span className="footer--link">Tracking</span>
                        </a>
                    </Col>
                    <Col xs="12" md="6">
                        <a href="#">
                            <img className="footer--img" src={calculator} alt="weigth and volume calculator" />
                            <span className="footer--link"> Weigth and volume calculator </span>
                        </a>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;
