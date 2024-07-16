import React from 'react'
import { Link,NavLink,useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <div>
      
      <div class="full_bg"> 
         <header class="header-area">
            <div class="container">
               <div class="row d_flex">
                  <div class=" col-md-3 col-sm-3">
                     <div class="logo">
                        <a href="">Bliss</a>
                     </div>
                  </div>
                  <div class="col-md-9 col-sm-9">
                     <div class="navbar-area">
                        <nav class="site-navbar">
                           <ul>
                              <li><NavLink  to="/">Home</NavLink></li>
                              <li><NavLink  to="/About">About</NavLink></li>
                              <li><NavLink  to="/Service">Service</NavLink></li>
                              <li><NavLink  to="/Blog1">Blog</NavLink></li>
                              <li><NavLink  to="/Contact">Contact us</NavLink></li>
                              <li className="d_none"><Link to="/login"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
                              <li className="d_none"><a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                           </ul>
                           <button class="nav-toggler">
                           <span></span>
                           </button>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         </div> 
    </div>
  )
}
export default Navbar
