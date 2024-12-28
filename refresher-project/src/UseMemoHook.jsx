import React from 'react'
import { useEffect, useMemo, useState } from 'react';

function UseMemoHook() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    // Equivalent code with use effect and use state

    // const [doubleNumber, setDoubleNumber] = React.useState(0);
    // React.useEffect(() => {
    //     setDoubleNumber(slowFunction(number));
    // }, [number]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark]);

   

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);
  return (
    <>
    <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

export default UseMemoHook

function slowFunction(num){
  console.log("Calling Slow Function");
  for(let i=0; i<=1000000000; i++){}
  return num*4;
}