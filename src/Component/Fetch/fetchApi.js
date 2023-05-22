import React, { useEffect, useState } from 'react';

export function ApiCalls() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Mydata.json')
      .then((response) => response.json())
      .then((data) => setDisplay(data));
  }, []);

  return (
    <div className='p-5 container row'>
        {/* <div className='row'> */}
          {display.map((value, index) => (
            <div className='card col-lg-4'>
              <img src={value.itemImg} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{value.itemName}</h5>
                <p className='card-text'>{value.desc}</p>
                <a href=''className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        {/* </div> */}
    </div>
  );
}
