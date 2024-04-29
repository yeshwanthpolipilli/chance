import React from 'react'
import { PRODUCTS } from "../Components/Ringsdetails";
import { Link } from "react-router-dom";




function Products() {
  return (
    <>
      <div className="container heyyy">

        <div className="row my-5">
          {PRODUCTS.map((productitem) => {
            return (
              <>
                <div className="col-lg-4">
                  <div class="card">
                 
<img className="banner_img w-100 d-flex mx-auto"  src={productitem.image} alt="react" />
             <h4 class="card-text text-danger">{productitem.title}</h4>
             <p class="card-titleprice">{productitem.price}</p>
             <Link to="/Ringhover" className="nav-link">  <a href="#" className="btn btn-primary try w-100">   Try at home for free  </a> </Link> 
            {/* <div class="overlay">
   <video className='w-100 h-100' controls  autoplay loop src={productitem.video}></video>
  
  </div> */}
                   
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;