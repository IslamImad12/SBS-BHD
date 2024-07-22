import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import img1 from '../images/observation-urban-building-business-steel.jpg';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home-content">
            <h2 className='say'>
              <ReactTypingEffect
                text={['SPS-PHD']}  // Text to type
                speed={100}     // Typing speed
                eraseSpeed={50} // Erase speed
                eraseDelay={1000} // Delay before erasing
                typingDelay={500} // Delay before typing starts
                cursor={'|'}    // Custom cursor
                repeat={Infinity} // Infinite loop
              />
            </h2>
            <p className='text-white'>
              A website that provides consultations and services for 
              the creation and development of smart buildings. At different levels in the building, such as energy,
              lighting, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
