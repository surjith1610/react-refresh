import React, { useState } from 'react'

// useState is a hook that allows you to have state variables in functional components
function UseStateHook() {
    
    let x = 10;
    const handleAdd = () => {
        x = x + 1;
        console.log(x);
    }

    // useState returns an array with two elements
    // with useState, you can declare a state variable and set its initial value
    const [num, setNum] = useState(100);
    const handleSub = () => {
        setNum((num)=> {
            console.log(num-1);
            return num-1;
        });
    };
  return (
    <>
    <button onClick={handleAdd}>Increment</button>
    <div>{x}</div>

    
    <button onClick={handleSub}>Decrement</button>
    <div>{num}</div>
    </>
  )
}

export default UseStateHook;