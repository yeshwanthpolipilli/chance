import React from "react";
import Yesh from "../src/images/logo.webp";
import "../src/Style.css";
// import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


 


export default function Navbar() {
  return (
    <>
<div className="fix">
    
   <div className="container-fluid yesh">
  <div className="row">
<div className="col-lg-4"><Link to="/Home" className="nav-link">
<img className="banner_img"  src={Yesh} alt="react" />
            </Link></div>


<div className="col-lg-4">
  <input type="email" class="form-control input" placeholder="Search for jewellery"/>


</div>
<div className="col-lg-4">
    <div className="row down">
<div className="col-lg-3 Locate">   <Link to="/Recentlyviewed" className="nav-link">
              Recently Viewed
            </Link></div>
<div className="col-lg-3 Locate"><Link to="/Storelocator" className="nav-link">
Locate ourstore 
            </Link></div>
<div className="col-lg-3 Locate"><FaHeart className="heart"/></div>
<div className="col-lg-3 Locate"><MdOutlineLocalGroceryStore className="heart" /></div>

    </div>
</div>

  </div>
   </div>
      
      <div className="container-fluid">
<div className="row bg py-2">
    <div className="col-lg-10">
    <ul>
    <li><a className="" href="">10+1 Monthly plan <IoIosArrowDown /></a></li>
    <li><a href=""><div class="dropdown">
  <span>Watch jewellery</span>
  <div class="dropdown-content">
  <p>Charm</p>
   <p>hey</p>
  </div>
</div><IoIosArrowDown /></a></li>
    <li><a href=""> <Link to="/Ringsdetails" className="nav-link"> Rings<IoIosArrowDown /></Link></a></li>
    <li><a href=""> <Link to="/Ringsdetails" className="nav-link"> Earrings <IoIosArrowDown /></Link></a></li>
    <li><a href="">All jewellery<IoIosArrowDown /></a></li>
    <li><a href="">Gifts<IoIosArrowDown /></a></li>
    <li><a href="">Coins<IoIosArrowDown /></a></li>
</ul>
    </div>

    <div className="col-lg-1">
        <ul>
    <li><a href="">Offers<IoIosArrowDown /></a></li>
</ul>
    </div>
</div>

      </div>
</div>




    </>
  );
}