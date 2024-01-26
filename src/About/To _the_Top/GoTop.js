import React, { useEffect, useState } from 'react';
import './GoTop.css';
import { FaArrowUp } from 'react-icons/fa';

function Go_Top() {
  const [isVisible, setIsVisible] = useState(false);

  const gototn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (


        <div className='go_top' onClick={gototn}>
          <FaArrowUp className='gototop' />
        </div>
      )}
    </div>
  );
}

export default Go_Top;
