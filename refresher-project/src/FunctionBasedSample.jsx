import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FunctionBasedSample() {
    const [first, setFirst] = useState(1)
    const [second, setSecond] = useState(100)

    const getData = () => {
        console.log("Fetching data")
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        console.log("First Value Changed")

    }, [first]);

  return (
   <>
    <h1>Function Based Component</h1>
    <h2>First: {first}</h2>
    <h2>Second: {second}</h2>
    <button onClick={()=>setFirst(first+1)}>Increment First</button>
    <button onClick={()=>setSecond(second+1)}>Increment Second</button>
   </>
  )
}

export default FunctionBasedSample