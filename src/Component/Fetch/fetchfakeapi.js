import React, { useEffect, useState } from 'react';

export function FakeApiCalls() {
  const [fakedisplay, setDisplay] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setDisplay(data));
  }, []);

  return (
    <div className='p-5  container row'>
      {fakedisplay.map((value, index) => (
        <>
        <div className='card col-lg-4' key={value.id}>
          <img src={value.image} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{value.title}</h5>
            <p className='card-text'>{value.description}</p>
            <a href='' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        </>
      ))}
    </div>
  );
}
