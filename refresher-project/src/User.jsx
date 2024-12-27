import React from 'react'

// Both of the following snippets will render the same output:

// Passing props

// function User(props) {
//   return (
//     <>
//     <p>name: {props.name}</p>
//     <p>age: {props.age}</p>
//     <p>email: {props.email}</p>
//     <p>phone: {props.phone}</p>
//     </>
//   )
// }

// Destructuring props
function User({name, age, email, phone_number, address}) {
    return (
      <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <p>phone: {phone_number}</p>
        <p>address: {address}</p>
      </>
    )
  }
export default User