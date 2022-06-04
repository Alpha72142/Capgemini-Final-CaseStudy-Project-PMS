
import React, { useState } from 'react'
import Model from './Model';
import './pop1.css'

function Pop() {
  const [model,setmodel]=useState(false);

  const Toggle =()=>setmodel(!model);
  return (
    
    <body className='adddrugs-popup'>
         <button onClick={()=> Toggle()}>Model</button>
         <Model show={model} close={Toggle}/>
    </body>
   
  )
}

export default Pop;