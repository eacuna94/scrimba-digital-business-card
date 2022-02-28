import React from 'react';
import './component.styles.css';

import facebook from '../assets/facebook-square-brands.svg';
import github from '../assets/github-square-brands.svg';
import instagram from '../assets/instagram-square-brands.svg';
import twitter from '../assets/twitter-square-brands.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <a href='#'><img src={twitter} /></a>
      <a href='#'><img src={facebook} /></a>
      <a href='#'><img src={instagram} /></a>
      <a href='#'><img src={github} /></a>
    </div>
  )
}