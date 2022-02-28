import React from 'react';
import envelope from '../assets/envelope.svg';
import linkedin from '../assets/linkedin.svg'
import './component.styles.css'

export default function Information() {
  return (
    <div className='info'>
      <p className='position'>Frontend Developer</p>
      <span className='website'>github.com/eacuna94</span>
      <div className='info-btn'>
        <a href='#' className='email-link'><img src={envelope} className='email-icon' />Email</a>
        <a href='#' className='linkedin-link'><img src={linkedin} className='linkedin-icon' />LinkedIn</a>
      </div>
    </div>
  )
}