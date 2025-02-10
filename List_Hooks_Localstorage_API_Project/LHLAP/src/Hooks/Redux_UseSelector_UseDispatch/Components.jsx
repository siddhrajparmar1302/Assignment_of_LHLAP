
/* Create react app with use of useSelector & useDispatch. */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Store';

function Components() {
 
  const count = useSelector((state) => state.counter.value);
 
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Redux Counter</h2>
      <h3>Count: {count}</h3>
      <button
        onClick={() => dispatch(increment())}
        style={{ margin: '5px', padding: '10px' }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ margin: '5px', padding: '10px' }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        style={{ margin: '5px', padding: '10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Components;
