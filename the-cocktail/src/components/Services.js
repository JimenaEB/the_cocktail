import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../assets/boat.svg'
import img2 from '../assets/ship.svg'
import img3 from '../assets/hands.svg'
import img4 from '../assets/plane.svg'

class Service extends Component{
    render(){
        return (
            <Col xs="12" md="6" lg="3" className="services--section">
                <div className="services--icon">
                    <img className="services--icon--inner" src={this.props.img} alt="" />
                </div>
                <h2>{this.props.title}</h2>
                <p className="services--text">{this.props.text}</p>
                {this.props.links.map(function(link){
                    return (
                        <div>
                            <a className="services--link" href="#">{link}</a>
                            <br />
                        </div>
                    )
                })}
                <button className="btn services--button" type="button" name="button">MORE DETAILS</button>
            </Col>
        );
    }
}

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'services': [
                {
                    'img': img1,
                    'title': "Ocean Freight",
                    'text': "Proin pharetra pharetra neque vitae tempus. Ut dignissim sapien nec.",
                    'links': [
                        'What do we do for you & advantages',
                        'FCL (Full Containers)'
                    ]
                },
                {
                    'img': img2,
                    'title': "Ocean Freigh",
                    'text': "Proin pharetra pharetra neque vitae tempus. Ut dignissim sapien nec.",
                    'links': [
                        'What do we do for you & advantages',
                        'FCL (Full Containers)'
                    ]
                },
                {
                    'img': img3,
                    'title': "Ocean Freight",
                    'text': "Proin pharetra pharetra neque vitae tempus. Ut dignissim sapien nec.",
                    'links': [
                        'What do we do for you & advantages',
                        'FCL (Full Containers)'
                    ]
                },
                {
                    'img': img4,
                    'title': "Ocean Freight",
                    'text': "Proin pharetra pharetra neque vitae tempus. Ut dignissim sapien nec.",
                    'links': [
                        'What do we do for you & advantages',
                        'FCL (Full Containers)'
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Container fluid="true" className="services section">
                <Row>
                    {this.state.services.map(function(service){
                        return <Service img={service.img}title={service.title} text={service.text} links={service.links} />;
                    })}
                </Row>
            </Container>
        );
    }
}

export default Services;
