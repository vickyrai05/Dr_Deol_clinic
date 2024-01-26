import React, { useState } from 'react';
import './Navbar.css';
import { IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Scr from '../Carasusel.js/images/Scr.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className='logo'>

        <img src={Scr} alt='new' className='logo'  style={{height:"110px",marginTop:"0px"}}/>
        </div>
        <div className='menu'>
          <div className={`menu-links ${menuOpen ? 'menu-links-open' : ''}`}>
            <NavLink to='/' exact activeClassName='active-link'>
              Home
            </NavLink>
            <NavLink to='/blog' activeClassName='active-link'>
              About
            </NavLink>
            <NavLink to='/slidercard' activeClassName='active-link'>
              Service
            </NavLink>
            <NavLink to='/contact' activeClassName='active-link'>
              Appointment
            </NavLink>
          </div>
          {/* <NavLink to='/login'>
            <button className='log-in'>Log In</button>
          </NavLink> */}
        </div>
        <div className='menu-btn' onClick={toggleMenu}>
          <i>
            <IoMdMenu />
          </i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
