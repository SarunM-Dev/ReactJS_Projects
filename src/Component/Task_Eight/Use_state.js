import React, { useState } from 'react';
import { Add, Remove, RestartAlt } from '@mui/icons-material';

export function IncandDec() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='text-center p-5'>
        <button type='button' onClick={() => setCount(count + 1)} className='bg-success'>
          <Add /> Increment
        </button> 
        <button>{count}</button>
        <button type='button' onClick={() => setCount(count - 1)} className='bg-danger'>
          <Remove /> Decrement
        </button> 
        <button type='button' onClick={() => setCount(0)}>
          <RestartAlt /> Reset
        </button> 
      </div>
    </>
  );
}
