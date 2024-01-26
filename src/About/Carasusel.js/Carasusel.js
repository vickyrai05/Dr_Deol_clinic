import React from 'react';
import './Carasusel.css';
import Carousel from 'react-bootstrap/Carousel';
import d21 from '../Carasusel.js/images/d21.jpg';
import Sc1 from '../Carasusel.js/images/Sc1.png';

function Carasusel() {
  return (
    <div className="responsive-div">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d21}
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '560px' }}
          
        />
        <Carousel.Caption>
        {/* <h1  className='text'>Homeopathic Treatments</h1>
        <a href='/j'>Make Appointment</a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d21}
          alt="Second slide"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '560px' }}
        />
        <Carousel.Caption>
        {/* <h1 className='text'>Homeopathic Treatments</h1>
        <a href='/'>Make Appointment</a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sc1}
          alt="Third slide"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '530px' }}
        />
        <Carousel.Caption>
         {/* <h1  className='text'>Homeopathic Treatments</h1>
         <a href='l/' >Make Appointment</a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carasusel;
