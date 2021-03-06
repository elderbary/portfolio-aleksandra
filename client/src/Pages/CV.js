import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Pagination from "../Components/Pagination";
import Btn from "../Components/Btn";
import Social from "../Components/Social";
import Timeline from "../Components/Timeline";

import English from "../Components/English";
import Office from "../Components/Office";
import Adobe from "../Components/Adobe";
import Norway from "../Components/Norway";


class Test extends Component {

    handleScroll = (event) => {
        if (event.deltaY < 0) {
            window.location.href = '/o-mnie';
        }
        else if (event.deltaY > 0) {
            window.location.href = '/kontakt';
        }
    }

    enableScroll = () => {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentDidMount() {
        setTimeout(this.enableScroll, 800);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toogle" md={1}></Col>
                        <Col className="col-std col-center" md={10}>
                            <div className="div-center">
                                <Row className="row-stats">
                                    <Col className="col-std col-stats">{<English />}</Col>
                                    <Col className="col-std col-stats">{<Office />}</Col>
                                    <Col className="col-std col-stats">{<Adobe />}</Col>
                                    <Col className="col-std col-stats">{<Norway />}</Col>
                                </Row>
                                <Row className="row-cv">
                                    {<Timeline />}
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4 }}><Btn btntext="Pobierz CV" /></Col>
                        <Col className="col-std col-footer" md={{ span: 3, offset: 9 }}>
                            <p>Projekta i realizacja: <a href="https://dosoft.pl">dosoft.pl</a>  Icon made by Freepik from <a href="https://www.flaticon.com/authors/freepik">flaticon</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Test;
