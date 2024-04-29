import React from "react";
import { useParams } from "react-router-dom";
import Hello from '../images/pagenotfound.avif'

function PageNotFound() {
  let Yeshua = useParams();
  console.log(Yeshua);


  return (
    <>
      <style>
     
        {`
       
       .yeah
      {
        color:red;
        font-size:50px

      }
      .banner_img5
      {
        width:450px
      }
        
        `}
      </style>
      <div className="container">
        <h1 className="display-1 text-danger">
        <span className="yeah">{Yeshua.name} This page is not found</span>  
        <div><img className="banner_img5 my-3"  src={Hello} alt="404 error" /></div>
        </h1>
      </div>
    </>
  );
}

export default PageNotFound;
