import React from 'react';
import Card from 'react-bootstrap/Card';

//inmport components
import ButtonPage from './button.jsx';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const CardPage = ()=> {
  return (
    <Card style={{ width: '17rem' }} className="m-auto mb-5">
    <Card.Img variant="top" src={rigoImage} />
    <Card.Body className='text-center'>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-center'>
      <ButtonPage text="Find Out More!"/>
    </Card.Footer>
  </Card>
  );
}

export default CardPage;