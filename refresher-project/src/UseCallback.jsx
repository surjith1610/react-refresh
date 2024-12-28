import React from 'react'
import { useCallback } from 'react';
import List from './List';

function UseCallback() {
    const [number, setNumber] = React.useState(0);
    const [dark, setDark] = React.useState(false);

    const getItems = useCallback(() => { 
        return [number, number + 1, number + 2];
}, [number]);

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
  return (
    <div style={themeStyles}>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
        <List getItems={getItems} />
    </div>
  )
}

export default UseCallback