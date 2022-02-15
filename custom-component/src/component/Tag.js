import React, { useState } from 'react';
import '../css/tag.scss';
import { CgClose } from 'react-icons/cg';

const Tag = () => {
  return (
    <div>
      <h2>Tag</h2>
      <div className='flex-box'>
        <input
          className='tag-input'
          placeholder='Press enter to add tags'
          
        />
        <div className='tag-item'>
          ㅇㅁㅇ
          <div className='close-btn'>
            <CgClose size="20" color="#777" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;