import React, { Component } from 'react';
import { Col } from 'reactstrap';

class FooterSection extends Component {
    render(){
        return(
            <Col xs="12" md="6" lg="2" className="footer--section">
                <h4 className="footer--title">{this.props.title}</h4>
                {this.props.links.map(function(link){
                    return(
                        <div>
                            <a className="footer--section--link" href="#">{link}</a>
                            <br />
                        </div>
                    )
                })}
            </Col>
        );
    }
}

export default FooterSection;
