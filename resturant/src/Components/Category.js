import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Pulse from 'react-reveal/Pulse';

 const Category = ({filterByCategory, allCategory}) => {
    const onFilter = (cat)=>{
     filterByCategory(cat)
}
    return (
       <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>
            <Pulse>
            {
                allCategory.length>=1 ? (allCategory.map((cat)=>{
                    return (
                        <div>
                <button onClick={()=> onFilter(cat)} style={{border:"1px solid green"}} className='btn mx-2'>{cat}</button>
                       </div>
                    )
                })): <h4>No Cats are available now</h4>
            }
            </Pulse>
        </Col>
       </Row>
    )
}
export default Category;
