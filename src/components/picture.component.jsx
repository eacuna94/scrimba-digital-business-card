import React from 'react';
import profile from './ea.png'
import './component.styles.css'

export default function Picture() {
  return (
    <img src={profile} className='profile-picture' alt='profile picture' />
  )
}