import React from 'react'
import { useEffect, useState } from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("Updating Items");
        setItems(getItems());
        console.log("Items Updated");
    }, [getItems]);
  return (
    <div>{
        items.map((item, index )=> (
            <div key={index}>{item}</div>
))
        }</div>
  );
}

export default List