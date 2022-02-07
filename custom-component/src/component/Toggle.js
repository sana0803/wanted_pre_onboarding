import React, { useState } from 'react';
import '../css/toggle.scss';

const Toggle = () => {
  const [toggleOn, setToggleOn] = useState(true)

  const offToggle = () => {
    console.log('토글 오프')
    setToggleOn(false)
  }
  const onToggle = () => {
    setToggleOn(true)
  }

  return (
    <div>
      <h2>Toggle</h2>
      <div className='flex-box'>
        <div className='toggle-switch'>
          <div className='toggle-circle' onClick={offToggle}>            
          </div>
        </div>
        <p className='on-off'>Toggle Switch ON</p>
        <p>Toggle Switch OFF</p>
        <p>트루? {toggleOn}</p>
      </div>
    </div>
  );
};

export default Toggle;