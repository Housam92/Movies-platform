import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const CardList = ({itemsData}) => {


  return (
    <Row>
      <Zoom >
      {
        itemsData.length >= 1 ? (itemsData.map((item)=>{
return (<Col key={item.id} className='mt-4' sm='12'>
<Card className="d-flex flex-row  " style={{ backgroundColor:'#F8F8F8'}}>
  <Card.Img className="img-item" variant="top" src={item.imgUrl}/>
  <Card.Body>
    <Card.Title >
      <div className='d-flex justify-content-between'>
      <div className='item-title'> {item.title} </div>
      <div className='item-price'> {item.price} </div>
      </div>
    </Card.Title>
    <Card.Text className='py-2'>
      <div className='item-description'>
       {item.describtion}    </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>)
        })): <h3 className="text-center"> No Categoris available</h3>
      }
      </Zoom>
    </Row>
    
  );
};

export default CardList;
