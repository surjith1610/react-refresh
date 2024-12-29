import React from 'react'
import { useQuery } from 'react-query'

function Test1() {
    const {isLoading, data, error} = useQuery('githubData', async ()=> {
        const res = await fetch('https://api.github.com/repos/surjith1610/MentalHealthCounsellor');
        return await res.json();
    })

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    console.log(data);
  return (
    <>
    <div>Test1</div>
    <div>{data.name}</div>
    <div>Stargazers count: {data.stargazers_count}</div>
    <div>Watchers Count: {data.watchers_count}</div>
    <div>Forks count: {data.forks_count}</div>
    <div>Open issues count: {data.open_issues_count}</div>
    </>
    
  )
}

export default Test1