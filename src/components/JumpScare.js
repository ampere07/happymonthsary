import React, { useEffect, useRef, useState } from 'react';
import './JumpScare.css';

const JumpScare = () => {
  const audioRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [showLoveModal, setShowLoveModal] = useState(false);

  useEffect(() => {
    // Play the sound when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }

    // Show button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setShowLoveModal(true);
  };

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
      
      {showButton && (
        <button 
          className="jumpscare-button"
          onClick={handleButtonClick}
        >
          Pindutin mo beybe
        </button>
      )}

      {showLoveModal && (
        <div className="love-modal-overlay">
          <div className="love-modal-content">
            <h2>💕 MAHAL NA MAHAL KITA BABYY 💕</h2>
            <h3>ILOVEYYOUUU TO THE MOON AND BACK</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default JumpScare;
