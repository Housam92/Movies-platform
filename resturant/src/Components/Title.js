import React from 'react'
import { Row, Col } from 'react-bootstrap';

 const Title = () => {
    return (
        <Row className='my-2 mb-5 '>
            <Col sm="12" className='justify-content-center text-center'>
                <div className='title'>Food Meneu</div>
                <div className='justify-content-center d-flex'>
                    <p className='underline'></p>
                </div>
                
            </Col>
        </Row>
    )
}
export default Title;