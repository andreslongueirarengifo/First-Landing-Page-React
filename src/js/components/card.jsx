import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const CardPage = (promp)=> {
  return (
    <Card style={{ width: '17rem' }} className="m-auto mb-5">
    <Card.Img variant="top" src={promp.item.url} />
    <Card.Body className='text-center'>
      <Card.Title>{promp.item.title}</Card.Title>
      <Card.Text>
        {promp.item.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-center'>
    <Button variant="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
    </Card.Footer>
  </Card>
  );
}

export default CardPage;