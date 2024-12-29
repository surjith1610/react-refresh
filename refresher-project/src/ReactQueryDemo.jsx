import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Test1 from './Test1';


function ReactQueryDemo() {
    const usequeryclient = new QueryClient();
    
  return (
    <QueryClientProvider client={usequeryclient}>
        <div>ReactQueryDemo</div>
        <Test1 />
       
    

    </QueryClientProvider>
    
  )
}

export default ReactQueryDemo