import React from 'react'
import axios from 'axios';

function ApiCall() {
    // Api call using fetch

    // async function fetchData() {
    //     const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    //     const data = await response.json();
    //     console.log(response);
    //     console.log(data);
    // };

    // Api call using axios
    async function fetchData() {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log(response);
        console.log(response.data);
    };
    
  return (
    <>
    <h3>API call from JOKE API</h3>
    <button onClick={fetchData}>Fetch Joke</button>
    </>
  )
}

export default ApiCall