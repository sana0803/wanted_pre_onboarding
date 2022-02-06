import React from 'react';

const Modal = () => {
  return (
    <div>
      <h2>Modal</h2>
      <div className='flex-box'>
        <button className='modal-btn'>
          Open Modal
        </button>
      </div>
      <div className='modal-wrap'>
        <div className='modal'>
          <p>모달 내용입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;