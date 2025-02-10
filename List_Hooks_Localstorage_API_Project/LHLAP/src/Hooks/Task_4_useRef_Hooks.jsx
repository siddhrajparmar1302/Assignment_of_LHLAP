/*Create react app to avoid re-renders in react application by useRef */


import React, { useRef, useState } from 'react'

const Task_4_useRef_Hooks = () => {
    const [count, setCount] = useState(0); 
    const renderCount = useRef(0); 
  
    const increment = () => {
      setCount((prevCount) => prevCount + 1); 
    };
  
    const updateRenderCount = () => {
      renderCount.current += 1; 
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter App with useRef</h2>
        <h3>Counter: {count}</h3>
        <button
          onClick={() => {
            increment();
            updateRenderCount();
          }}
          style={{ margin: "10px", padding: "10px" }}
        >
          Increment Counter
        </button>
        <p>
          Button clicked <strong>{renderCount.current}</strong> times.
        </p>
        <p>
          <em>(Note: The above number does not trigger re-renders!)</em>
        </p>
      </div>
    );
}

export default Task_4_useRef_Hooks

