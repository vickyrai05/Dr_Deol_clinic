import React, { useState } from 'react';
import './Gallery.css';
import Deol1 from '../register/images/Deol1.jpg';
import deol2 from '../register/images/deol2.jpg';
import deol3 from '../register/images/deol3.jpg';
import deol4 from '../register/images/deol4.jpg';
import deol5 from '../register/images/deol5.jpg';
import deol6 from '../register/images/deol6.jpg';
import deol7 from '../register/images/deol7.jpg';
  const QuoteFigure = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const openModal = (image) => {
      setSelectedImage(image);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
  return (
    <div>
     
      <main className="container">
      <div className="item item-1" onClick={() => openModal(Deol1)}>
          <img className="img" src={Deol1} alt="" />
        </div>
        <div className="item item-2" onClick={() => openModal(Deol1)}>
        <img className="img" src={Deol1}  alt=''/>
        </div>
        <div className="item item-3" onClick={() => openModal(deol2)}>
          <img className="img" src={deol2}  alt=''/>
        </div>
        <div className="item item-4" onClick={() => openModal(deol4)}>
          <img className="img" src={deol4}  alt=''/>
        </div>
        <div className="item item-5" onClick={() => openModal(Deol1)}>
        <img className="img" src={Deol1}  alt=''/>
        </div>
        <div className="item item-6" onClick={() => openModal(deol6)}>
        <img className="img" src={deol6}  alt=''/>
        </div>
        <div className="item item-7" onClick={() => openModal(deol5)}>
        <img className="img" src={deol5}  alt=''/>
        </div>
        <div className="item item-8" onClick={() => openModal(deol3)}>
        <img className="img" src={deol3}  alt=''/>
        </div>
        <div className="item item-9" onClick={() => openModal(deol7)}>
        <img className="img" src={deol7}  alt=''/>
        </div>
        <div className="item item-10"onClick={() => openModal(deol5)}>
        <img className="img" src={deol5}  alt=''/>
        </div>
        <div className="item item-11" onClick={() => openModal(deol7)}>
        <img className="img" src={deol7}  alt=''/>
        </div>
        <div className="item item-12"onClick={() => openModal(deol5)}>
        <img className="img" src={deol5}  alt=''/>
        </div>
        <div className="item item-13">
        <img className="img" src={Deol1}  alt=''/>
        </div>
        <div className="item item-14">
        <img className="img" src={Deol1}  alt=''/>
        </div>
        <div className="item item-15">
        <img className="img" src={Deol1}  alt=''/>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Created by Madalena.design</p>
      </footer>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img
  src={selectedImage}
  alt=""
  style={{
   
    height: '650px',
    marginTop: '25px',
    maxWidth: '100%',
    backgroundColor:" rgba(0, 0, 0, 0.7)",
    objectFit:"cover", 
    marginBottom:"25px"
  }}
/>

          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteFigure;
