import React from 'react';
import heart from './heart-removebg-preview.png'
import './Feed.css'
export function FeedBack(){
    return(
       <>
        <div className="emoji-bg p-5">
                <div className="bg-light bg-color-feed">
                    <div className="text-center container p-5 ">
                        <img src={heart} alt="no images found" width="150"/><br/><br/>
                        <h1 className="p-3">Thank You!</h1>
                        <h6 className="p-3">We will use your feedback to improve our customer support performance</h6>
                    </div>
                </div>
            </div>
        </>
    )
}