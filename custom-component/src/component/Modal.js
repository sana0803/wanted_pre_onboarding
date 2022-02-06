import React from 'react';
import '../css/modal.scss';
import { CgClose } from 'react-icons/cg';

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
          <div className='close-wrap'>
            <CgClose size="28" color="#777" />
          </div>
          <p>모달 내용입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;