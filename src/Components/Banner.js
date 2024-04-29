import React from 'react'
import Yesh1 from '../images/msin1.webp'
import Yesh2 from '../images/main2.webp'
import Yesh3 from '../images/main3.webp'
import Yesh4 from '../images/main4.webp'
import Yesh5 from '../images/main5.webp'
import Yesh6 from '../images/main6.webp'
import Yesh7 from '../images/main8.webp'
import Yesh8 from '../images/main9.webp'
import Yesh9 from '../images/main104.webp'
import Yesh10 from '../images/main11.webp'
import Yesh11 from '../images/main12.webp'
import Yesh13 from '../images/mainjuly.webp'
import "../Style.css";

function Banner() {
  return (
<>
    <div className="total">
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-1">
        </div>
     
        <div className="col-lg-2 bg1">
     <p>Feb</p>
    <a href="#1"><button className="check"></button><br /></a>
    <a  href="#2"><button className="check"></button></a>
    <p>Dec</p>
    <a  href="#3"><button className="check"></button></a>
    <p>Nov</p>
    <a  href="#4"><button className="check"></button><br /></a>
    <a  href="#5"><button className="check"></button></a>
    <p>Oct</p>
    <a  href="#6"><button className="check"></button></a>
    <p>Sep</p>
    <a  href="#7"><button className="check"></button></a>
    <p>Aug</p>
    <a  href="#8"><button className="check"></button></a>
    <p>Jul</p>
    <a  href="#9"><button className="check"></button></a>
        </div>
        <div className="co-lg-9">
        <a id="1"></a><p className="heading text-danger">STYLISH FEBRUARY</p>
    
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
     <div class="carousel-inner">
        <div class="carousel-item active">
        <img className="banner_img1 w-75"  src={Yesh1} alt="react" />
        </div>
        <div class="carousel-item">
        <img className="banner_img1 w-75"  src={Yesh2} alt="react" />
        </div>
        <div class="carousel-item">
        <img className="banner_img1 w-75"  src={Yesh3} alt="react" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
       
    </div>
    </div>
    <div>
    <a id="2"></a><div className="carousel-inner">  <img className="banner_img1 w-75 my-3"  src={Yesh4} alt="react" /></div>
    </div>
    
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <iframe className="w-75 h-75" src="https://www.youtube.com/embed/VOAZirf4hOs" title="#BigGoldUpgrade by BlueStone Jewellery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="col-lg-6">
        <div className="carousel-inner1 iframe">  <img className="banner_img1 w-100 my-5"  src={Yesh5} alt="react" /></div>
        </div>
      </div>
    </div>
    
    <div>
    <a id="3"></a><p className="heading1 text-danger">DAZZLING DECEMBER</p>
    <div className="carousel-inner2">  <img className="banner_img1 w-75 my-2"  src={Yesh6} alt="react" /></div>
    
    </div>
    
    <div>
    <a id="4"></a><p className="heading2 text-danger">STUNNING NOVEMBER</p>
    <div className="carousel-inner2">  <img className="banner_img1 w-75 my-3"  src={Yesh7} alt="react" /></div>
    
    </div>
    
    <div>
    <a id="5"></a><div className="carousel-inner2">  <img className="banner_img1 w-75"  src={Yesh8} alt="react" /></div>
    
    </div>
    
    
    <div className="my-4">
    <a id="6"></a><p className="heading3 text-danger">HAUTE OCTOBER</p>
    <div className="carousel-inner3">  <img className="banner_img1 w-75 my-2"  src={Yesh9} alt="react" /></div>
    
    </div>
    
    <div className="my-4">
    <a id="7"></a><p className="heading4 text-danger">SEPTEMBER SIZZLERS</p>
    <div className="carousel-inner3">  <img className="banner_img1 w-75 my-2"  src={Yesh10} alt="react" /></div>
    </div>
    
    <div className="my-4">
    <a id="8"></a><p className="heading5 text-danger">AUGUST TREASURES</p>
    <div className="carousel-inner3">  <img className="banner_img1 w-75 my-2"  src={Yesh11} alt="react" /></div>
    </div>
    
    <div className="my-4">
    <a id="9"></a><p className="heading6 text-danger">GORGEOUS JULY</p>
    <div className="carousel-inner3">  <img className="banner_img1 w-75 my-2"  src={Yesh13} alt="react" /></div>
    </div>
    </div>
    <div className="row">
      <div className="col-4">
    
      </div>
      <div className="col-5"><div className="para10">
    <p className="view text-center">VIEW MORE COLLECTIONS</p>
    </div></div>
    </div>
       </div>


    </>
    
  )
}

export default Banner
