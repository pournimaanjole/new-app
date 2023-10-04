import React from 'react'
import './Newscard.css';

const Newscard = ({title,image,url}) => {
  return (
    <div className='news-container'>
      <img src={image} className='new-img'></img>
      <h3 className='background'>{title}</h3>
      <a href={url} className='background'>
        <button className='btn'>Read More..</button>
      </a>
    </div>
  )
}

export default Newscard
