import React from 'react';
import '../css/tab.scss';

const Tab = () => {
  return (
    <div>
      <h2>Tab</h2>
      <div className='flex-box'>
        <nav>
          <ul>
            <li className='tab-list' onClick={}>
              Tab1
            </li>
            <li className='tab-list' onClick={}>
              Tab2
            </li>
            <li className='tab-list' onClick={}>
              Tab3
            </li>
          </ul>
        </nav>
        <div>
          탭 글 나오는 부분
        </div>
      </div>
    </div>
  );
};

export default Tab;