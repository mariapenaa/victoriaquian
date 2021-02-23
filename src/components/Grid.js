import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './Grid.css';

export function PhotoGrid() {
    var fv = {
        uno:"IMG_9235",
    };

    return (
    <Container fluid className="main-container-grid">
    <Row>
        <Col>
            <Row>
                <Col></Col>
                <Col>HEY</Col>
            </Row>
            <Row>HEY</Row>
        </Col>
        <Col>HEY</Col>
    </Row>
    </Container>
    );
}