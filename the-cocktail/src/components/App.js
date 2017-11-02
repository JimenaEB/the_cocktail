import React, { Component } from 'react';
import Header from './Header.js';
import Services from './Services.js';
import Incoterms from './Incoterms.js';
import Footer from './Footer.js';
import FooterImages from './FooterImages.js'

import {Container} from 'reactstrap';


class App extends Component {
    render() {
        return (

          <Container fluid="true" className="main-container">
            <Header />
            <Services />
            <Incoterms />
            <Footer />
            <FooterImages />
          </Container>
        );
    }
}

export default App;
