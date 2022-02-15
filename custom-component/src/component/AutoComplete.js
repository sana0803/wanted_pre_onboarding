import React, { useState } from 'react';
import '../css/auto.scss';
import { CgClose } from 'react-icons/cg';

const AutoComplete = () => {
  const wordData = [
    'apple', 'banana', 'cake', 'delete', 'effect', 'fox', 'gate', 'hiking', 'icecream','joke',
    'knife','land', 'morning', 'night', 'orange', 'penny', 'queen', 'rice', 'steak', 'telephone',
    'universe', 'violet', 'white', 'x-ray', 'yellow', 'zoo', 'air', 'boat', 'chase', 'dog',
    'egg', 'fire', 'ghost', 'hight', 'exit', 'jar', 'kite', 'line', 'moon', 'niddle', 'where',
    '거위', '나비', '다람쥐', '라디오', '모순', '부자', '새우', '아저씨', '자전거', '촛불',
    '케이크', '타조', '피망', '호루라기', '야구', '어머니', '벼루', '요거트', '두건',
    '유자', '의자', '기린', '책상', '외상', '스웨덴', '왜소', '감자', '스콘', '홍차',
    '푸주', '마라탕', '생선', '엄마', '아빠', '대학생', '김', '성장', '고양이', '강아지', '가위',
  ]

  const [searchWord, setSearchWord] = useState('')
  const [wordList, setWordList] = useState([])
  const [showList, setShowList] = useState(false)
    
  const wordHandler = (e) => {
    const keyword = e.target.value
    if(keyword.length === 0){
      setShowList(false)
    }
    else {
      const keywordList = wordData.filter((item) => {
        let res = true
        for(let i = 0; i < keyword.length; i++) {
          res = res && keyword.toLowerCase()[i] === item[i]
        }
        return res
      })
      // 키워드가 없을시
      if(keywordList.length === 0){
        setWordList([])
        setShowList(false)
      }
      // 검색했을때
      else {
        setWordList(keywordList)
        setShowList(true)
      }
    }
    setSearchWord(keyword)
  }

  const deleteWord = () => {
    setSearchWord('')
    setShowList(false)
  }
  
  return (
    <div>
      <h2>AutoComplete</h2>
      <div className='flex-box'>
        <div className='auto-search-wrap'>
          <input
            placeholder='내용을 입력하세요.'
            className={showList ? 'auto-input-true' : 'auto-input'}
            value={searchWord}
            onChange={wordHandler}
          />
          <div className='close-btn'>
            <CgClose size="20" color="#777" onClick={deleteWord} />
          </div>
           
        <ul className={showList ? 'show-true' : 'show-false'}>
          {wordList.map((wordItem, idx) => (
            <li
              key={idx}
              onClick={() => {setSearchWord(wordItem); setShowList(false)}}
            >
              {wordItem}
            </li>
          ))}
        </ul>
        </div>   
      </div>
    </div>
  );
};

export default AutoComplete;