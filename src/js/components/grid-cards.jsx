import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import components 
import CardPage from "./card.jsx";

//import data
import data from "../../data/data.json"

const GirdCardPage = () =>{
    return(
        <Row xs={1} md={2} lg={4} className="g-4 w-100">
        {
            data.map(item=>(
                <Col>
                    <CardPage item={item}/>
                </Col>
            ))
        }
    </Row>
    );
}

export default GirdCardPage;