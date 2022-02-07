import React from 'react';
import '../css/auto.scss';

const AutoComplete = () => {
  return (
    <div>
      <h2>AutoComplete</h2>
      <div className='flex-box'>        
        <input
          placeholder='내용을 입력하세요.'
          className='auto-input'
        />       
      </div>
    </div>
  );
};

export default AutoComplete;