import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import components 
import CardPage from "./card.jsx";

const GirdCardPage = () =>{
    return(
        <Row xs={1} md={4} className="g-4">
        <Col>
            <CardPage/>
        </Col>
        <Col>
            <CardPage/>
        </Col>
        <Col>
            <CardPage/>
        </Col>
        <Col>
            <CardPage/>
        </Col>
    </Row>
    );
}

export default GirdCardPage;