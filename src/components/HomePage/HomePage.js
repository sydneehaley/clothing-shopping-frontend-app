import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import dogwearingfur from './images/dogwearingfur.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavDropdownExample />
        <Carousel>
          <Carousel.Item className='home__intro--slide1'></Carousel.Item>

          <Carousel.Item className='home__intro--slide2'></Carousel.Item>

          <Carousel.Item className='home__intro--slide3'></Carousel.Item>
        </Carousel>
        <div className='home__section2--label'>What's Trending</div>
        <div className='home__section2'>
          <div className='home__section2--slide1'>
            {' '}
            {/* <h1>
              <span>Shoes</span>
            </h1> */}
          </div>
          <div className='home__section2--slide2'>
            {' '}
            {/* <h1>
              <span>Sunglasses</span>
            </h1> */}
          </div>
          <div className='home__section2--slide3'>
            {' '}
            {/* <h1>
              <span>Retro Looks</span>
            </h1> */}
          </div>
        </div>
        <div className='home__section3--label'>Shop Our Collections</div>
        <div className='home__section3'>
          <div className='home__section3--slide'>
            <div className='home__section3--slide1--icon'></div>
            <h3> Womens</h3>
          </div>
          <div className='home__section3--slide'>
            <div className='home__section3--slide2--icon'></div>
            <h3>Mens</h3>
          </div>
          <div className='home__section3--slide'>
            <div className='home__section3--slide3--icon'></div>
            <h3>Girls</h3>
          </div>
          <div className='home__section3--slide'>
            <div className='home__section3--slide4--icon'></div>
            <h3>Boys</h3>
          </div>
        </div>

        <div className='home__section4'>
          <div className='home__section4--sectionimg'></div>
          <div className='home__section4--blurb'>
            {/* <h6>
              <span>New!</span>
            </h6> */}
            <h5>Introducing</h5>
            <h1>Pets</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              magni sed aut debitis saepe architecto vero. Doloribus nisi
              possimus adipisci dolorem reprehenderit officiis corporis tenetur
              repudiandae sint fugit, veniam vero.
            </p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className='home__section5--label'>Shop Sale</div>
        <div className='home__section5'>
          <div className='home__section5--slide'>
            <div className='home__section5--slide1--icon'></div>
            <div className='home__section5--blurb'>
              <h3> Womens</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem officia quod rem ullam beatae labore enim minima
                a provident nobis, ipsam obcaecati atque assumenda, facilis
                doloremque perspiciatis. Quod, non fugiat!
              </p>
            </div>
          </div>
          <div className='home__section5--slide'>
            <div className='home__section5--slide2--icon'></div>
            <div className='home__section5--blurb'>
              <h3> Womens</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem officia quod rem ullam beatae labore enim minima
                a provident nobis, ipsam obcaecati atque assumenda, facilis
                doloremque perspiciatis. Quod, non fugiat!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NavDropdownExample = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg='white' className='home__nav--navbar'>
      <div className='home__nav--navbar--brandlogo'>
        <Navbar.Brand href='#home'>Threads</Navbar.Brand>
      </div>
      <div>
        <Nav
          activeKey='1'
          onSelect={handleSelect}
          className='home__nav--navlist'
        >
          <Nav.Item>
            <Nav.Link eventKey='1' href='#/home' className='home__nav--navlist'>
              Home
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title='Shop' className='home__nav--navlist--droplist'>
            <NavDropdown.Item eventKey='2.1'>Women</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.2'>Men</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.3'>Girls</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.4'>Boys</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.5'>Accessories</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.6'>Sale</NavDropdown.Item>
            <NavDropdown.Item eventKey='2.7'>Trading</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey='4.4'>Market Offers</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link eventKey='2' className='home__nav--navlist'>
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='3' className='home__nav--navlist'>
              FAQs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='4' className='home__nav--navlist'>
              Shipping
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='4' className='home__nav--navlist'>
              Returns
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className='home__nav--navbar--useractions'>
        <FontAwesomeIcon icon={faSearch} size='1x' />
        <FontAwesomeIcon icon={faUserCircle} size='1x' />
        <FontAwesomeIcon icon={faShoppingBag} size='1x' />
        <FontAwesomeIcon icon={faHeart} size='1x' />
      </div>
    </Navbar>
  );
};

export default HomePage;
