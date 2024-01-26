import React from 'react';
// import './Nature.css';
// import h2 from './images/h2.png';
const NatureSection = () => {
  return (
     <div className='responsive-container'>
    <section>
      <h1>Dr.Deol</h1>
      <div className="content">
        <p>
        Homoeopathy studies the whole person. Characteristics such as your temperament, personality, emotional and physical
         responses etc. are of utmost importance when prescribing a remedy. Thus please give as much information as possible 
         and answer as many of the questions as you can.
         The answer boxes will scroll to meet your needs. You can ask for professional advice on any health-related and medical subject
        </p>
     
      </div>
      <div className="img">
        {/* <img
          src={h2}
          alt="Nature"
        /> */}
        <a
          style={{
            backgroundColor: 'black',
            color: 'white',
            textDecoration: 'none',
            padding: '4px 6px',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
            fontSize: '12px',
            fontWeight: 'bold',
            lineHeight: '1.2',
            display: 'inline-block',
            borderRadius: '3px',
          }}
          href="https://unsplash.com/@andersjilden?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Anders Jildén"
        >
          {/* <span style={{ display: 'inline-block', padding: '2px 3px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '12px', width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-1px', fill: 'white' }}
              viewBox="0 0 32 32"
            >
               <title>unsplash-logo</title>
              <path
                d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"
              ></path> 
            </svg>
          </span> */}
         
        </a>
      </div>
    </section>
    </div>
  );
};

export default NatureSection;
