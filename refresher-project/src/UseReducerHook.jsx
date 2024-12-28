import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

function reducerfn(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducerfn, { count: 1 })
    const [count, setCount] = useState(1)

    const increment = () => {
        // setCount(count + 1)
        dispatch({ type: 'INCREMENT' })
     }

    const decrement = () => {
        // setCount(count - 1)
        dispatch({ type: 'DECREMENT' })
    }
  return (
    <>
    <p>UseReducerHook</p>
    <button onClick={increment}>Increment</button>
    <p>{state.count}</p>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default UseReducerHook