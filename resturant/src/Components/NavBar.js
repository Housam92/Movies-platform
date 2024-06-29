import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 const NavBar = ({filterBySearch}) => {
    const [searchValue, setSearchValue] = useState("")

    const onSearch = ()=>{
        filterBySearch(searchValue)
        setSearchValue("")
    }
    return (
        <Row>
            
    <Navbar bg='dark' expand="lg"  variant='dark'>
      <Container >
        <Navbar.Brand href="#">
            <div className='fs-4' style={{color:'greenyellow'}}>T-Food</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
         onChange={(e)=>setSearchValue(e.target.value)}
         value={searchValue}
            />
            <Button onClick={()=>onSearch()} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

        </Row>
    )
}

export default NavBar;
