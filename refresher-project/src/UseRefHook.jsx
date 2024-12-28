import React, { useEffect } from 'react'

function UseRefHook() {
    const [input, setInput] = React.useState("");
    console.log("Getting rendered");

    const inputRef = React.useRef();

    useEffect(() => {
        inputRef.current = input;                                                       
    }, [input]);

    const display = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    };
  return (
    <>
        <h1>Input</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        {/* <input type="text" ref={inputRef} /> */}
        <p>My Name is {input}</p>
        <p>My Name is {inputRef.current}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <button onClick={display}>Show Input</button>
    </>
  )
}

export default UseRefHook