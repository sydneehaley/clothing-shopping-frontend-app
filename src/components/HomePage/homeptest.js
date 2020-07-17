import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar bg='light' variant='light' className='home__nav--navbar'>
          <Navbar.Brand href='#home' className='home__nav--navbar--brandlogo'>
            THREADS
          </Navbar.Brand>
          <Nav className='justify-content-end'>
            <Nav.Link href='#home' className='home__nav--navlink'>
              Home
            </Nav.Link>
            <Nav.Link href='#features' className='home__nav--navlink'>
              Shop
            </Nav.Link>
            <Nav.Link href='#features' className='home__nav--navlink'>
              About Us
            </Nav.Link>
            <Nav.Link href='#pricing' className='home__nav--navlink'>
              Blog
            </Nav.Link>
          </Nav>
          <Form className='home__nav--navbar--search'>
            <input
              type='text'
              placeholder='Search'
              className='home__nav--navbar--search'
            />
            <Button variant='outline-primary'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar>

        <Carousel>
          <Carousel.Item className='home__intro--slide1'></Carousel.Item>

          <Carousel.Item className='home__intro--slide2'></Carousel.Item>

          <Carousel.Item className='home__intro--slide3'></Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomePage;
