import { useState } from 'react';
import {Button,Container,Form,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar({ fn }) {
  const [word,setWord]=useState('')
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
          <Container >
              <Link to={'/'} className='tx'>
        مطعم الأندلس
              </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
                  >
                      <Link className='tx mx-2 '  to='/menu'> قائمة الطعام
                      </Link>
                      <Link className='tx mx-2 ' to='/home'> الرئيسية
                      </Link>
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="بحث..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => setWord(e.target.value)}
              value={word}
              style={{backgroundColor:'#111',color:'#0dcaf0',placeContent:'black'}}
            />
            <Button variant="outline-info" className='mx-2' onClick={() => { fn(word); setWord('')} }>بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;