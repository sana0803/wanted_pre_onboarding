import React from 'react';
import '../css/auto.scss';

const AutoComplete = () => {
  const dummyData = [
    'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india',
    'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra',
    'tango', 'uniform', 'victor', 'wiskey', 'x-ray', 'yankee', 'zulu', 'time', 'person', 'year',
    'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place',
    'work', 'week', 'case', 'point', 'government', 'alligator', 'bee', 'cat', 'dog', 'elephant', 'fox',
    'giraffe', 'hippo', 'iguana', 'jellyfish', 'kangaroo', 'lion', 'monkey', 'nightingale', 'owl', 'penguin',
    'quail', 'raccoon', 'seal', 'turtle', 'unicorn', 'vulture', 'whale', 'x-ray fish', 'yark', 'zebra',
    '무궁화', '장미', '코스모스', '튤립', '기차', '낙하산', '배', '버스', '우유', '주스', '커피', '냉장고',
    '해바라기', '은행잎', '단풍잎', '대나무', '비행기', '오토바이', '자전거', '헬리콥터', '다리미', '선풍기', '세탁기', '전기밥솥',
    '보리', '벼', '선인장', '소나무', '지하철', '화물차', '승용차', '감자튀김', '청소기', '카세트', '텔레비전', '비둘기',
    '닭', '돼지', '기타', '피아노', '붕어빵', '사탕', '샌드위치', '아이스크림', '닭', '까마귀', '까치', '독수리', '우체통',
    '자전거', '경찰차', '구급차', '초콜릿', '치즈', '케이크', '피자', '병아리', '부엉이', '오리', '타조',
  ]
  
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