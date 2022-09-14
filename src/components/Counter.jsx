import React from 'react'
import { useState } from 'react'

export const Counter=()=> {
    const [counter,setCounter] = useState(0)
  return (
    <div className='d-flex justify-content-around w-50'>
        <i className="fa-solid fa-plus fa-3x text-danger"></i>
        <div>A számláló értéke: {counter}</div>
        <i className="fa-solid fa-minus fa-3x text-success"></i>
    </div>
    
  )
}
