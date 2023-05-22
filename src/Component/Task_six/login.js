import React from 'react';
import './login.css';
import laptop from './laptop.jpg';  
import { Email , Https } from '@mui/icons-material';

export function LoginPage() {
  return (
    <>
    <div className='login-background p-3'>
      <div className='login-page-background container'>
        <div className='row jeeva'>
          <div className='col-lg-6'>
            <img src={laptop} alt='' className='col-lg-9 p-5 d-flex mr-auto ml-auto mt-3' />
          </div>
          <div className='col-lg-6 mt-5'>
              <h1 className='login-name'>Member Login</h1>
              <div className='input-group mb-3 mt-2 border'>
                <span className='input-group-text' id='basic-addon1'>
                  <Email />
                </span>
                <input type='text' className='form-control border' placeholder='User Email' aria-label='Username' aria-describedby='basic-addon1' />
              </div>
              <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon1'>
                  <Https />
                </span>
                <input type='password' className='form-control border' placeholder='Password' aria-label='Password' aria-describedby='basic-addon2' />
              </div>
              <button className='login-button mt-2'>Login</button>
              <p className='text-center mt-2'>Forgot <span className='ChangeColor'>Username / Password ?</span></p>
              <p className='text-center mt-2'><span className='ChangeColor'>Create Your Account</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
