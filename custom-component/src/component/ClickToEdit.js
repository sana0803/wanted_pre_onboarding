import React, { useState } from 'react';
import '../css/tab.scss';

const ClickToEdit = () => {
  const [userName, setUserName] = useState('김코딩')
  const [userAge, setUserAge] = useState('20')
  const [newName, setNewName] = useState(userName)
  const [newAge, setNewAge] = useState(userAge)

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
            value={userName}
            onFocus={e => e.target.select()}
            onBlur={() => setNewName(userName)}
          />
        </div>
        <div className='user-info-wrap'>
          <span>나이</span>
          <input
            placeholder='나이를 입력하세요.'
            onChange={ageHandler} 
            className='user-input'  
            value={userAge}
            onFocus={e => e.target.select()}
            onBlur={() => setNewAge(userAge)}
          />
        </div>
        <div className='user-preview'>
          <p className='user-name'><b>Name :</b> {newName}</p>
          <p><b>Age :</b> {newAge}</p>
        </div>    
      </div>
    </div>
  );
};

export default ClickToEdit;