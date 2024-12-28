import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './UseContextHook';

const Customer = () => {
    const theme = useContext(ThemeContext);
    console.log(theme);
    
    const textStyle = {
        color: theme === 'light' ? 'white' : 'black',
        backgroundColor: theme === 'light' ? 'black' : 'white'
    };
  return (
    <div>
        <p style={textStyle}>Customer</p>
    </div>
  );
}

export default Customer