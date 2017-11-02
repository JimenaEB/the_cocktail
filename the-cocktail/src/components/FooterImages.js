import React, { Component } from 'react';
import {Container, Row, Col, Popover, PopoverBody} from 'reactstrap';

import img1 from "../assets/Bitmap3.png"
import img2 from "../assets/Bitmap.png"
import img3 from "../assets/Bitmap4.png"
import img4 from "../assets/Bitmap2.png"

class FooterImages extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            'popoverOpen': [false, false, false, false]
        }
    }

    toggle(index) {
        var states = this.state.popoverOpen;
        states[index] = !states[index];
        this.setState({
            popoverOpen: states
        });
    }

    render(){
        return(
        <Container fluid="true" className="logo">
            <Row>
                <Col lg="4" className="d-none d-lg-block logo--decoration"></Col>
                <Col xs="12" lg="8" className="logo--container">
                    <Row>
                        <Col xs="6" lg="3" className="align-self-center">
                            <img id="Popover1" className="logo--img" src={img1} alt="Non-vessel operating common carrier" onClick={() => this.toggle(0)}/>
                            <Popover placement="top" isOpen={this.state.popoverOpen[0]} target="Popover1" toggle={this.toggle}>

                                <PopoverBody className="popover-top">Non-vessel operating common carrier</PopoverBody>
                            </Popover>
                        </Col>
                        <Col xs="6" lg="3" className="align-self-center">
                            <img id="Popover2" className="logo--img" src={img2} alt="The United States Federal Maritime Commission" onClick={() => this.toggle(1)}/>
                            <Popover placement="top" isOpen={this.state.popoverOpen[1]} target="Popover2" toggle={this.toggle}>
                                <PopoverBody>The United States Federal Maritime Commission</PopoverBody>
                            </Popover>
                        </Col>
                        <Col xs="6" lg="3" className="align-self-center">
                            <img id="Popover3" className="logo--img" src={img3} alt="Member of the World Cargo alliance" onClick={() => this.toggle(2)}/>
                            <Popover placement="top" isOpen={this.state.popoverOpen[2]} target="Popover3" toggle={this.toggle}>
                                <PopoverBody>Member of the World Cargo alliance (WCA)</PopoverBody>
                            </Popover>
                        </Col>
                        <Col xs="6" lg="3" className="align-self-center">
                            <img id="Popover4" className="logo--img" src={img4} alt="Federación Española de Transitarios Expedidores Internacionales y Asimilados" onClick={() => this.toggle(3)}/>
                            <Popover placement="top" isOpen={this.state.popoverOpen[3]} target="Popover4" toggle={this.toggle}>
                                <PopoverBody>Federación Española de Transitarios Expedidores Internacionales y Asimilados</PopoverBody>
                            </Popover>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default FooterImages;
