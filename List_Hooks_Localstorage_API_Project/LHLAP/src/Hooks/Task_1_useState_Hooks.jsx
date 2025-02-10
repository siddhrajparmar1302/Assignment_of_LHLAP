
/*Create a functional component with a counter using the useState() hook. Include 
buttons to increment and decrement the counter.*/


import React, { useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
