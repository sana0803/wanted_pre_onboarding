import React, { useState } from 'react';
import '../css/modal.scss';
import { CgClose } from 'react-icons/cg';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <h2>Modal</h2>
      <div className='flex-box'>
        <button className='modal-btn' onClick={openModal}>
          Open Modal
        </button>
      </div>
      <div className={modalOpen ? 'modal-wrap-open' : 'modal-wrap-close'}>
        <div className='modal'>
          <div className='close-wrap'>
            <span onClick={closeModal}>
              <CgClose size="28" color="#777" />
            </span>
          </div>
          <p>모달 내용입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;