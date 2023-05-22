import React from 'react';
import './CongratsCard.css';
import profile from './congrats-card-profile-img.png';
import product from './download.jpg';

export function CongratsCard() {
  return (
    <div className='background'>
      <h1>Congratulations</h1>
      <div className='cardd text-center'>
        <img src={profile} alt='' className='profile'/>
        <h3>Kiran</h3>
        <p>KGiSL MicroCollege Full Stack Developer</p>
        <img src={product} alt='' className='watch' />
      </div>
    </div>
  );
}
