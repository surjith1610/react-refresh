import React, { useEffect } from 'react'
import { useLayoutEffect, useState } from 'react'

function UseLayoutEffectHook() {
    const [count, setCount] = useState(0)

    console.log("render called")
    useLayoutEffect(() => {
        console.log("useLayoutEffectHook called")
        console.log(count)
    }, [count])
    // useEffect(() => {
    //     console.log("useEffectHook called")
    //     console.log(count)
    // }, [count])
  return (
    <>
    <p>UseLayoutEffectHook</p>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>

    </>
  )
}

export default UseLayoutEffectHook