import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './Grid.css';

export function PhotoGrid() {
    return (
    <Container fluid className="main-container">
    <Row>
        <Col>
            <Row>
                <Col>HEY</Col>
                <Col>HEY</Col>
            </Row>
            <Row>HEY</Row>
        </Col>
        <Col>HEY</Col>
    </Row>
    </Container>
    );
}