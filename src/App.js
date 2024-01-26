import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './About/Home/Home';
import Slidercard from './About/Slider/Slidercard';
import Contact from './About/Contact/Contact';
import Blog from './About/blog/Blog';
import Login from './About/register/Login';
import Signup from './About/register/Signup';
import Navbar from './About/Navbar/Navbar';
import Footer from './About/Footer/Footer';
 import GoTop from './About/To _the_Top/GoTop';


const WithHeader = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
 
    <Router>
      <Routes>
        <Route
          path='/'
          element={<WithHeader><Home /></WithHeader>} // Wrap Home with WithHeader
        />
        <Route
          path='/blog'
          element={<WithHeader><Blog /></WithHeader>} // Wrap Blog with WithHeader
        />
        <Route
          path='/slidercard'
          element={<WithHeader><Slidercard /></WithHeader>} // Wrap Slidercard with WithHeader
        />
        <Route
          path='/contact'
          element={<WithHeader><Contact /></WithHeader>} // Wrap Contact with WithHeader
        />
        <Route path='/login' element={<Login />} /> {/* Login page without header */}
        <Route
          path='/signup'
          element={<Signup />} // Wrap Signup with WithHeader
        />
      </Routes>
      <GoTop />
    </Router>
  
  );
}

export default App;
