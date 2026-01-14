import React from 'react';
import './Modal.css';

const Modal = ({ onNextPage }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🎉 HAPPY MONTHSARYY 🎉</h2>
        <p>
          Happy monthsary babyy isang buwan nalang aanniversary na naten napaka dami ng pagsubok at hamon ang dumaan saten pero eto tayo andito paden sa isat isa ilang away pag tatalo tampuhan ang mangyare mas pinili naten mag stay sa isat isa kaya -
        </p>
        <button 
          className="next-button"
          onClick={onNextPage}
        >
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default Modal;
