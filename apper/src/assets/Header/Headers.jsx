import React from 'react'
import '../Header/header.css'

const Headers = () => {
  return (
    <div>
      <div className='navbar'>
        <ul className='horizontalList'>
          <li className='listItem'>Courses</li>
          <li className='listItem'>All Exams</li>
          <li className='listItem'>Current-Affairs</li>
          <li className='listItem'>Offline Addmission</li>
          <li className='listItem'>Contact Us</li>
        </ul>
        <ul className='horizontalList'>
          <li className='listItem'>+91 7011808879</li>
          <li className='listItem'>Go To</li>
          <li className='listItem'>English</li>
        </ul>
      </div>
    </div>
  )
}

export default Headers;