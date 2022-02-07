import React, { useState } from 'react';
import '../css/tab.scss';

const ClickToEdit = () => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const nameHandler = (e) => {
    setUserName(e.target.value)
  }
  const ageHandler = (e) => {
    setUserAge(e.target.value)
  }
  
  return (
    <div>
      <h2>ClickToEdit</h2>
      <div className='flex-box'>
        <div className='user-info-wrap'>
          <span>이름</span>
          <input
            placeholder='이름을 입력하세요.'
            onChange={nameHandler}
            className='user-input'
          />
        </div>
        <div className='user-info-wrap'>
          <span>나이</span>
          <input
            placeholder='나이를 입력하세요.'
            onChange={ageHandler} 
            className='user-input'       
          />
        </div>
        <div className='user-preview'>
          <p className='user-name'><b>Name :</b> {userName}</p>
          <p><b>Age :</b> {userAge}</p>
        </div>    
      </div>
    </div>
  );
};

export default ClickToEdit;