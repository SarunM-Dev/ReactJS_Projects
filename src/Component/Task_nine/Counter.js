import React, { useState } from 'react';
import apple from './OIP.jpg';
import orange from './orangee.jpg';
import './Counter.css';

export function Counter(){
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(0);
    return (
        <>
            <div className='container-fluid friuts-bg p-5'>
                <div className='row container friuts-bg-new'>
                    <div className='col-lg-6'> 
                        <h1>Apple</h1>
                        <h1>{count1}</h1>
                        <img src={apple} alt='' className='col-lg-11' />
                        <button
                            type='button'
                            className='bg-success text-light text-center ml-3 mt-5 mb-5'  onClick={() => setcount1(count1 + 1)}>
                            Add To Cart
                        </button>
                    </div>
                    <div className='col-lg-6'> 
                        <h1>Orange</h1>
                        <h1>{count2}</h1>
                        <img src={orange} alt='' className='col-lg-10' />
                        <button  type='button'  className='bg-success text-light text-center ml-3 mt-5 mb-5'  onClick={() => setcount2(count2 + 1)} >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
