import React, { useEffect, useRef } from 'react';
import './JumpScare.css';

const JumpScare = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the sound when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  }, []);

  return (
    <div className="jumpscare-container">
      <audio 
        ref={audioRef}
        src="/assets/sfx.mp3"
        preload="auto"
      />
      <img 
        src="/assets/scary.jpg"
        alt="Jump Scare"
        className="jumpscare-image"
      />
    </div>
  );
};

export default JumpScare;
