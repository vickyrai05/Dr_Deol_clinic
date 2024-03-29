import React from 'react';
import './Blog.css';
import { NavLink } from 'react-router-dom';

function Blog() {
  return (
    <>
      <div className="app">
        <header>
    
        </header>
        <nav>
          <NavLink to='/' exact activeClassName='active-link'>
            Home
          </NavLink>
          <NavLink to='/blog' activeClassName='active-link'>
            About
          </NavLink>
          <NavLink to='/contact' activeClassName='active-link'>
            Contact Us
          </NavLink>
        </nav>
        <main>
          <h1><span>Dr.Deol<sub></sub><br></br>Homeopathy</span></h1>
          <p>The use of homeopathy is remarkably popular. Popularity, however, is not an arbiter in a scientific discourse. In fact,
            the assumptions underlying homeopathy violate fundamental laws of nature.
            Homeopathy does not have any explanatory power and fails other criteria established for a scientific approach
          </p>
          <a href="/full-article">Read full article</a>
        </main>
      </div>
    </>
  );
}

export default Blog;
