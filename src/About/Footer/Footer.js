import React from 'react';
import './Footer.css';
import { BiPhoneCall } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <>
   
      <footer className="footer-20192">
        <div className="site-section">
          <div className="container">

            <div className="cta d-block d-md-flex align-items-center px-5">
              <div>
                <h2 className="mb-0">DR. DEOL Homeopathy</h2>
                <h3 className="text-dark">We provide best Homeopathic Treatment</h3>
              </div>
             
            </div>
            
            <div className="row">
              <div className="col-sm">
                <a href="#" className="footer-logo">Dr.Deol Homeopathy</a>
                <p className="copyright">
                  <small>&copy;Since 2019</small>
                </p>
              </div>
              <div className="col-sm">
                <h3 className='v'>Payment Mode</h3>
                <ul className="list-unstyled links">
                  <li><a href="#">E-Wallets Accepted</a></li>
                  <li><a href="#">Online</a></li>
                </ul>
              </div>
              <div className="col-sm">
                <h3 className='v'>Treatment</h3>
                <ul className="list-unstyled links">
                  <li><a href="#">Thyroid Disorder</a></li>
                  <li><a href="#">Migrain</a></li>
                  <li><a href="#">Liver Disease</a></li>
                  <li><a href="#">Homeopathic Treatment for Depression</a></li>
                </ul>
              </div>
              <div className="col-sm">
                <h3 className='v'>Contact us</h3>
                <ul className="list-unstyled links">
                  <li><a href="https://wa.me/7382325000" target="_blank" rel="noopener noreferrer"> <BiPhoneCall /> 91 7382325000</a></li>
                  <li><a href="https://maps.google.com/?q=Mehta+Rd,+opposite+Dic+Office,+old,+Focal+Point,+GTB+Nagar,+Amritsar,+Amritsar+Cantt.,+Punjab+143001" target='_blank'> <TfiLocationPin />Amritsar,Punjab </a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3 className='b'>Follow us</h3>
                <ul className="list-unstyled social">
                  <li><a href="https://www.facebook.com/DrDeolHomeopathy?mibextid=rS40aB7S9Ucbxw6v" target="_blank"><span className="icon-facebook"><FaFacebook /></span></a></li>
                  <li><a href="https://www.instagram.com/drdeolhomoeopathic_clinic?igsh=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"><FaInstagram /></span></a></li>
                  <li><a href="https://wa.me/7382325000" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"><SiWhatsapp /></span></a></li>
                  <li><a href='https://www.linkedin.com/in/dr-deol-homeopathy-37b604187' target="_blank" rel="noopener noreferrer"><span className="icon-paper-plane"><CiLinkedin /></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
