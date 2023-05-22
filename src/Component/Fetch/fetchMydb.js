import React, { useEffect, useState } from 'react';

export function MydbApiCalls() {
  const [database, setDisplay] = useState([]);

  useEffect(() => {
    fetch('http://localhost:100/men_products')
      .then((response) => response.json())
      .then((data) => setDisplay(data));
  }, []);

  return (
    <div className='p-5 container row'>
          {database.map((value, index) => (
            <div className='card col-lg-4'>
              <img src={value.itemImg} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{value.itemName}</h5>
                <p className='card-text'>{value.des}</p>
                <a href=''className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
    </div>
  );
}
