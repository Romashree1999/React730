import React from 'react'

export default function Child(props) {
    console.log(props)
  return (
    <div>
      <p>My name is {props.na}</p>
      <p>Age= {props.age}</p>
    </div>
  )
}


