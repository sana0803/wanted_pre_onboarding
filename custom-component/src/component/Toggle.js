import React, { useState } from 'react';
import '../css/toggle.scss';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  const onToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <h2>Toggle</h2>
      <div className='flex-box'>
        <div className={'toggle-switch-'+ isChecked}>          
          <input
            type='checkbox'
            checked={isChecked}
            onChange={onToggle}
            id='switch'
            className='switch-checkbox'
            />
          <label htmlFor='switch'className='toggle-label'>
            <div className='toggle-ball' />
          </label>
        </div>
        <p className='on-off'>
          {isChecked ? 'Toggle Switch ON' : 'Toggle Switch OFF'}
        </p>
      </div>
    </div>
  );
};

export default Toggle;