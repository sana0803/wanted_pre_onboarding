import React, { useState } from 'react';
import '../css/tab.scss';

const Tab = () => {
  const [currentIdx, setCurrentIdx ] = useState(0) // idx 초기값

  const tabContents = [
    {
      title: 'Tab1',
      content: 'Tab menu ONE'
    },
    {
      title: 'Tab2',
      content: 'Tab menu TWO'
    },
    {
      title: 'Tab3',
      content: 'Tab menu THREE'
    },
  ]

  const tabClickHandler = (idx) => {
    setCurrentIdx(idx)
  }

  return (
    <div>
      <h2>Tab</h2>
      <div className='flex-box'>
        <nav>
          <ul className='tab-ul'>
            {tabContents.map((tabItem, idx) => (
              <li
                key={idx}
                className={currentIdx === idx ? 'tab-list-active' : 'tab-list'}
                onClick={() => tabClickHandler(idx)}>
                {tabItem.title}
              </li>            
            ))}
          </ul>
        </nav>
        <div className='tab-content'>
          <p>{tabContents[currentIdx].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;