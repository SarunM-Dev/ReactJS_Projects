import React from 'react';
import './Feed.css';
import das from'./das-removebg-preview.png';
import hpy from './hpy-removebg-preview.png';
import normal from './nornal.png';
import { Link } from 'react-router-dom';

export function EmojiImg() {
  return (
    <div className='container-fluid emoji-bg p-5'>
      <div className='row'>
        <div className='container emoji-div justify-content-center'>
          <h5 className='text-center mt-5'>How satisfied are you with our customer support performance</h5>
          <div className='row p-5 justify-content-center ml-5'>
            <div className='col-lg-3'>
              <Link to="/open">
                <img src={hpy} className='col-lg-7' alt="Happy"/>
              </Link>
              <h2 className='ml-4'>Happy</h2>
            </div>
            <div className='col-lg-3'>
              <Link to="/open">
                <img src={normal} className='col-lg-7' alt="None" />
              </Link>
              <h2 className='ml-4'>None</h2>
            </div>
            <div className='col-lg-3'>
              <Link to="/open">
                <img src={das} className='col-lg-7' alt="Sad" />
              </Link>
              <h2 className='ml-5'>Sad</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}