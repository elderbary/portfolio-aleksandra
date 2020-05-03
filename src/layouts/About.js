import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Btn from "./Btn";
import Statistics from "./Statistics";
import Text from "./Text";
import Picture from "./Picture";
import Social from "./Social";

import aleksandra from '../images/aleksandra-wolna.jpg';

class Test extends Component {
    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toogle" md={1}>{<Toggle />}</Col>
                        <Col className="col-std col-left" md={5}>
                            <div className="div-left">
                                <Container className="container-left">
                                    <Row className="row-text">
                                        <Col className="col-std col-text" md={12}><Text title="Cześć, jestem Ola" text ="Mam 26 lat a środowisko, które mnie otacza, stanowią puste kubki po herbacie oraz sterty (nie)przeczytanych książek, od ciężaru których uginają się już półki. Piszę o książkach i serialach od 6 lat, od momentu w którym stwierdziłam, że to już czas. Czytam kryminały (szwedzkie), reportaże (wydawnictwa Czarnego) oraz obyczajówki (ciekawe). "/></Col>
                                    </Row>
                                    <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="5 lat" description ="doświadczenia"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="42" description ="klientów"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="215" description ="artykułów"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="53,345" description ="słów"/></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                            <div className="div-right">
                            <Picture imgportfolio={aleksandra} alt="Aleksandra Wolna" />
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4}}>{<Btn />}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Test;
