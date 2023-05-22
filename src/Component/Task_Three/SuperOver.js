import React from 'react';
import './SuperOver.css';
import rcb from './R.jpg';
import csk from './cskimage.jpg'

export function SuperLeague() {
  return (
   <div className='backgroundColor'>
    <div className='text-center'> 
        <h1 className='heading p-5'>Super Over League</h1>
        <div className='container mt-2'>
        <img src={rcb} alt='' className='rcb'/>
        <img src={csk} alt='' className='csk'/>
        </div>
    </div>
   </div>
  );
}
