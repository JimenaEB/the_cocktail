import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import next from "../assets/next.svg"
import truck from "../assets/truck.svg"
import container from "../assets/container.png"
import ship from "../assets/ship.png"
import doc from "../assets/doc.svg"
import check from "../assets/check.png"
import cross from "../assets/cross.png"

class Incoterms extends Component {
    constructor(props){
        super(props);
        this.show_term = this.show_term.bind(this);
        this.state = {
            'incoterms': [
                {'name': 'FOB', 'meaning': 'Free On Board', 'class': 'incoterms--terms'},
                {'name': 'CFR', 'meaning': 'Cost & Freight', 'class': 'incoterms--terms'},
                {'name': 'CIF', 'meaning': 'Cost, Insurance & Freight', 'class': 'incoterms--terms incoterms--terms--pointer'},
                {'name': 'DAT', 'meaning': 'Delivered At Terminal', 'class': 'incoterms--terms'},
                {'name': 'DAP', 'meaning': 'Delivered At Place', 'class': 'incoterms--terms'}
            ],
            'current_meaning': "CIF: Cost, Insurance & Freight",
            'current_name': 'CIF'
        }
    }

    show_term(term, index){
        const incoterms = this.state.incoterms;
        incoterms.map((term) => term.class = 'incoterms--terms')
        incoterms[index].class = 'incoterms--terms incoterms--terms--pointer'

        this.setState({
            'current_meaning': term.name + ': ' + term.meaning,
            'incoterms': incoterms
        })
    }

    render(){
        return(
            <Container fluid="true" className="incoterms">
                <Row>
                    <Col xs="12" className="align-self-center">
                        <h2 className="incoterms--title">Ocean Freight <b>Incoterms</b></h2>
                        <p className="incoterms--text">Ocean freight is the logistics of exporting and
                            importing cargo by shipping lines. Goods are packed
                            in shipping containers. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {this.state.incoterms.map((term, index) => {
                        return (
                            <Col xs="auto" className={this.state.incoterms[index].class} onClick={() => this.show_term(term, index)}>
                                <span>{term.name}</span>
                            </Col>
                        );
                    }, this)}
                </Row>
                <Row className="justify-content-center">
                    <span className="incoterms--explaination">{this.state.current_meaning}</span>
                </Row>
                <Row className="incoterms--steps">
                    <Col xs="4" lg="12">
                        <Row className="row">
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <img className="incoterms--steps--img" src={truck} alt="" />
                                <img className="d-none d-lg-block incoterms--steps--next" src={next} alt="" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <img className="incoterms--steps--img" src={container} alt="" />
                                <img className="d-none d-lg-block incoterms--steps--next" src={next} alt="" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <img className="incoterms--steps--img" src={ship} alt="" />
                                <img className="d-none d-lg-block incoterms--steps--next" src={next} alt="" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <img className="incoterms--steps--img" src={doc} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="4" lg="12">
                        <Row>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <p className="incoterms--steps--paragraph">Pickup and transportation to loading terminal container</p>
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <p className="incoterms--steps--paragraph">Origin port - Load container on board</p>
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <p className="incoterms--steps--paragraph">Vessel transportation</p>
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container">
                                <p className="incoterms--steps--paragraph">Insurance documentation</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="4" lg="12" className="order-first order-lg-12">
                        <Row>
                            <Col xs="12" lg="3" className="incoterms--steps--container incoterms--steps--imgcontainer">
                                <img className="incoterms--steps--check" src={check} alt="check" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container incoterms--steps--imgcontainer">
                                <img className="incoterms--steps--check" src={check} alt="check" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container incoterms--steps--imgcontainer">
                                <img className="incoterms--steps--check" src={check} alt="check" />
                            </Col>
                            <Col xs="12" lg="3" className="incoterms--steps--container incoterms--steps--imgcontainer">
                                <img className="incoterms--steps--check" src={cross} alt="nop" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Incoterms;
