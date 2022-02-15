import React, { useState } from 'react';
import '../css/tag.scss';
import { CgClose } from 'react-icons/cg';

const Tag = () => {
  const [tagWord, setTagWord] = useState('')
  const [tagList, setTagList] = useState([])

  const onEnter = (e) => {
    // 빈값일 경우 태그로 추가하지 않기
    return e.target.value.length !== 0 && e.key === 'Enter' ? addTag() : null
  }

  const addTag = () => {
    setTagList((tagList) => [...tagList, tagWord]) 
    setTagWord('')
  }

  const deleteTag = (idx) => {
    const allTag = tagList.slice()
    allTag.splice(idx, 1)
    setTagList(allTag)
  }

  return (
    <div>
      <h2>Tag</h2>
      <div className='flex-box'>
        <div className='tag-wrap'>
          {tagList.map((tagItem, idx) => (
            <div key={idx} className='tag-item'>
              <span>{tagItem}</span>
              <div className='tag-del-btn'>
                <CgClose
                  size="12"
                  color="#3111c0"
                  onClick={() => deleteTag(idx)}
                />                
              </div>
            </div>            
          ))}
          <input
            className='tag-input'
            placeholder='Press enter to add tags'
            value={tagWord}
            onChange={(e) => {setTagWord(e.target.value)}}
            onKeyPress={onEnter}
          />          
        </div>
      </div>
    </div>
  );
};

export default Tag;