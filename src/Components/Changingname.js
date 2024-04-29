import React, { useState } from 'react'

function Changingname() {
    const[name,SetName]=useState("yeshwanth")

    const onchange = (e) =>
    {

   SetName("rohit")

   
    }
  return (
 <>

<p>{name}</p>
 <button className='btn btn-primary' onClick={onchange}> Submit</button>
 
 
 
 
 
 </>
  )
}

export default Changingname
