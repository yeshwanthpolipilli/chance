import React from 'react'
import "../Style.css";

function Recentlyviewed() {
  return (
   <>
    <div>
      <h5 className='text-danger designtext'>Recently Viewed Design </h5>
       <div className="container store">
        <div className="row">
          <div className="col-lg-2"> <img
              className="w-75"
              src={require("../images/locator image.webp")}
              alt=""
            /></div>
          <div  className="col-lg-5"><p className='recentpara w-100 h-50 text-light'>Recently viewed designs will be
available here for your convenience.</p></div>
          <div className="col-lg-5 ">
            <button className='btn btn-success my-4 w-50 h-50 start'>Start Browsing</button> 
            </div>
        </div>
       </div>
      
    </div>
   </>
  )
}

export default Recentlyviewed
