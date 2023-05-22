import React from 'react';
import './SocialMedia.css';
import backGround from './imagesocial.jpg';

export function SocialMedia() {
  return (
    <div className='backgroundImages'>
      <h1 className='pt-5 text-center head'>Social Media</h1>
      <div className='p-5 text-center container'>
        <input type='button' value="Like" className='bg-primary h2 button'/>
        <input type='button' value="Comment" className='bg-dark text-white h2 button'/>
        <input type='button' value="Share" className='bg-success h2' />
      </div>
    </div>
  );
}
