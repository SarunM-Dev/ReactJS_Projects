import React from "react";
import laptop from './laptop.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Email , Https } from '@mui/icons-material';
export function LoginBoot(){
    return(
        <>
         <div className="bg-primary container-fluid p-5">
                <div className="bg-success container row">
                    <div className="col-lg-6 p-5">
                           <img src={laptop} className="col-lg-8"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className='login-name'>Member Login</h1>
                        <div className='input-group mb-3 mt-5 border'>
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
                        <button className='btn login-button mt-2'>Login</button>
                        <p className='text-center mt-2'>Forgot <span className='ChangeColor'>Username / Password ?</span></p>
                        <p className='text-center mt-2'><span className='ChangeColor'>Create Your Account</span></p>     
                    </div>
                </div>
            </div>
        
        </>
    );
}