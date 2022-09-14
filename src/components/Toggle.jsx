import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

export const Toggle=()=> {
  const [isHappy,setIsHappy]=useState(true)
  return (
    <div className="d-flex justify-content-center mt-3">
      <Button onClick={()=>setIsHappy(!isHappy)}>Are you happy? {isHappy?'😂':'😔'} </Button>
    </div>
  )
}
