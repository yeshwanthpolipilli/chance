import React, { useState } from 'react'

function Ringhover() {
    const [image,setImage]=useState(require("../images/ring1.webp"));
    const ImageChange = (e) =>
    {
        setImage(e.src);
    }
  return (
      <>
  <div className="container py-3">
    <div className="row">
        <div className="col-lg-6">
            <img className='w-75' src={image} alt="react" />
            <div className='my-5'>
            <img className='w-25 mx-1' onMouseOver={(e) => ImageChange(e.target)} src={require("../images/ring1.webp")} alt="react" />
            <img className='w-25'onMouseOver={(e) => ImageChange(e.target)}  src={require("../images/ringsmall2.webp")} alt="react" />
            <img className='w-25' onMouseOver={(e) => ImageChange(e.target)} src={require("../images/ringsmall3.webp")} alt="react" />
            <img className='w-25'onMouseOver={(e) => ImageChange(e.target)}  src={require("../images/ringsmall4.webp")} alt="react" />
            </div>
        </div>
        <div className="col-lg-6 py-2">
        <h3>The Gianna Ring</h3>
            <p>From The Precious Promise Collection</p>
            <h4><s>Rs.55,414</s></h4>
            <div className='d-flex'><h4>Rs.52,266</h4> <span className='border border-light w-50 text-center fa-10x '>10% off on Diamond price</span></div>
        <div className='my-2 border border-dark  w-100 h-25'>
        <span className='mx-2'>Your pincode </span>
         <input className='border border-primary w-25 my-2' type="text" value={110001} />
            <div className='dark'>
           
        <p className='mx-2'>Available in our store at Pusa Road, New Delhi and 24 other store(s)</p>
        <a className='mx-2' href="">View all designs in stores near you</a>
     
            </div>
            <p className='deli mx-2'>Delivery By</p>
        </div>
        <h5>Diamond Ring In 18Kt Yellow Gold (3.33 gram) with Diamonds (0.2650 Ct)    
        </h5>
       <hr  className='w-100 color-black'/>
      <div className='d-flex'>
        <p className='fs-2 my-2 textu'>size</p>
        <select class="form-select w-25 h-25 my-3 mx-4" aria-label="Default select example">
        <option value="1">Select size</option>
  <option value="1">6</option>
  <option value="2">7</option>
  <option value="3">8</option>
  <option value="1">9</option>
  <option value="2">10</option>
  <option value="3">11</option>
</select>

<span className='text-primary my-4 cursor-na'>Not sure about the size?</span>


      </div>
      <div className="class d-flex">

<button className="btn btn-danger w-50 h-25 fs-3 my-4">
Buy now
</button>
<p className='mx-5 monthly'>
10+1 MONTHLY PLAN</p>

</div>
        </div>
    </div>
  </div>
  
  
  
  
  
  
  </>
  )
}

export default Ringhover
