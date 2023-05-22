import React from 'react';
import './Card.css';
import dataSc from './data.png'
import iot from './7502476.png'
import vr from './OIP.jpg'
import ml from './OIP (1).jpg'

export function SixCard(){
    return(
        <>
        <div className='card-heading'>
        <h1 className='text-center'>Learn 4.0 Technologies</h1>
        <p className='text-center'>Technology is the application of knowledge for achieving practical goals in a reproducible way.
         The word technology can also mean the products resulting from such efforts, including both tangible</p>
        </div>
        <div className='container p-3'>
            <div className='row justify-content-around align-items-center'>
                <div className='card-heading Data-Scientist col-5 main-div'>
                    <h3>Data Scientist</h3>
                    <p>Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes,</p>
                    <img src={dataSc} alt="" className='col-lg-5 images'/>
                </div>
                <div className='card-heading Iotdeveloper col-5  main-div'>
                    <h3>IoT Developer</h3>
                    <p>IoT is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes,</p>
                    <img src={iot} alt="" className='col-lg-5 images'/>
                </div>
                <div className='card-heading VrDeveloper col-5 mt-3 main-div'>
                    <h3>Vr Developer</h3>
                    <p>A Vr Developer is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes,</p>
                    <img src={vr} alt="" className='col-lg-5 images'/>
                </div>
                <div className='card-heading MlEngineer col-5 mt-3 main-div'>
                    <h3>ML Engineer</h3>
                    <p>Ml Engineer is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes,</p>
                    <img src={ml} alt="" className='col-lg-5 images'/>
                </div>
            </div>
        </div>
       <div>
       </div>

        </>
    );
}