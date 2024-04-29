import React, { useState } from 'react'

function Upperse() {
  const handleclick=() =>
  {
let a=text.toUpperCase();
setText(a)

  }

  const handleupclick=() =>
  {
let b=text.toLowerCase();
setText(b)

  }

   const handleonchange =(e)=> 
    {
setText(e.target.value)

}
  const [text,setText]= useState("this is yeshwanth")
  const [color,seColor]= useState("FRed")


  return (
  <>
  <h1>hey</h1>
  
  <div className="form-floating">
  <textarea className="form-control w-50" value={text} onChange={handleonchange} placeholder="Leave a comment here"rows={8} id="floatingTextarea2" ></textarea>

<button className='btn btn-primary my-2' onClick={(handleclick)}>Convert to Uppercase</button>
<button className='btn btn-primary my-2' onClick={(handleupclick)}>Convert to Lowercase</button>
</div>
  
  
  </>
  )
}

export default Upperse
