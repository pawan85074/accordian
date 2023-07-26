import React, { useState } from 'react'
import './MyAccordion.css'

function MyAccordion(props) {
    const [show,setShow]=useState(false);
  return (
    <>
      <div className='quesDiv'>
        <p className='sign' onClick={()=>{setShow(!show)}}>{show ? "-":"+"}</p>
        <h3 className='qestDiv'>{props.question}</h3> 
      </div>
      
      {show && <p className='quesDivPragraph'>{props.answer}</p>}
      
    </>
  )
}

export default MyAccordion