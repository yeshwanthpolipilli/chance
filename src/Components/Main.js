import React from 'react'
import Shop from '../images/Jewelry Store.jpg'
import "../Style.css";
function Main() {
  return (
   <>
<div className="container-fluid">
<div className="item">
<img className="banner_img2"  src={Shop} alt="react" />
<p className='drop'>Drop in to a BlueStone Store near you</p>
<button className='btn mainbutton'>Know More</button>
</div>
</div>
<h4 className='text-center py-5 blue'>BlueStone Promise</h4>
<div className="container">
  <div className="row">
    <div className="col-lg-4"></div>
    <div className="col-lg-4"></div>
    <div className="col-lg-4"></div>
  </div>
</div> 





   </>
  )
}

export default Main
