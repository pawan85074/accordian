import React, { useState } from 'react'
import { Questions } from './api'
import MyAccordion from './MyAccordion'
import './accordion.css'

function Accordion() {
    const [data,setData]=useState(Questions)
  return (
    <>
      <div className='mainDiv'>
        <div className='secondDiv'> 
        <h1 style={{textAlign:'center'}}>React Interview Question 📖</h1>
        {data.map((curElem)=>{
        return <MyAccordion key={curElem.id}{...curElem}/>
       })}</div>
      </div>
    </>
  )
}

export default Accordion