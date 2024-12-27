import React, { useEffect } from 'react'
import { use } from 'react';

function UseEffectHook() {
  const [num1, setNum1] = React.useState(50);
  const [num2, setNum2] = React.useState(500);

  useEffect(() => {
    console.log("useEffect called");
    console.log(num1);
    setNum1(100);
  }, []);

  useEffect(() => {
    console.log("useEffect called");
    setNum2(5000);
    console.log(num2);

    return () => {
      console.log("Component unmounting/ cleaning to avoid memory leak");
    }
  },[num2]);

  return (
    <>
    <h3>{num1}</h3>
    <button onClick={() => setNum1(num1 + 1)}>Increment</button>

    <h4>{num2}</h4>
    <button onClick={() => setNum2(num2 - 1)}>Decrement</button>
    </>
   
  )
}

export default UseEffectHook;