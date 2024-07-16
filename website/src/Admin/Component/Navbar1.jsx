import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";

function Navbar1() {
  const redirect = useNavigate();
   
    useEffect(() => {
        if (localStorage.getItem('aid')) {
            
        }else{
            redirect('/Adminlogin')
        }
    })
    const adminlogout = () => {
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('logout SuccessFully !');
        redirect('/Adminlogin')
        
    }
  return (
    <div>
      <helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
      </helmet>
      <div class="full_bg">
        <header class="header-area">
          <div class="container">
            <div class="row d_flex">
              <div class=" row col-md-3 col-sm-3 ">
                <div class="logo">
                  <a href="/Dashbord">Dashboard</a>
                </div>
              </div>
              <div class="col-md-9 col-sm-9">
                <div class="navbar-area">
                  <nav class="site-navbar">
                    <ul>
                      {/* <li>
                      <NavLink to="/About">About</NavLink>
                    </li> */}
                      <div className="nav-item dropdown">
                        <a href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Service
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <NavLink to="/addservice" className="dropdown-item">
                            Add Service
                          </NavLink>
                          <NavLink to="/Manageservice" className="dropdown-item">
                            Manage Service
                          </NavLink>
                        </div>
                      </div>
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                          Blog
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <NavLink to="/Addblog" className="dropdown-item">
                            Add Blog
                          </NavLink>
                          <NavLink to="/manageblog" className="dropdown-item">
                            Manage Blog
                          </NavLink>
                        </div>
                      </div>
                      <div className="nav-item dropdown">
                        <a href="#"  className="nav-link dropdown-toggle"   data-toggle="dropdown">
                          Categories
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <NavLink to="/addcategories" className="dropdown-item">
                            Add Categories
                          </NavLink>
                          <NavLink to="/managecategories" className="dropdown-item">
                            Manage Categories
                          </NavLink>
                        </div>
                      </div>
                      <div className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown">
                          Contac us
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <NavLink to="/managecontac" className="dropdown-item">
                            contac table
                          </NavLink>
                        </div>
                      </div>
                      {(() => {
                                if (localStorage.getItem('aid')) {
                                    return (
                                        <NavLink to="/Aprofile" className="nav-item nav-link">Hi.. {localStorage.getItem('aname')}</NavLink>
                                    )
                                }
                            })()}
                      <li class="d_none col-md-12">
                        <Link to="">
                          {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                          <Button variant="contained" onClick={adminlogout}>
                            Logout
                          </Button>
                        </Link>
                      </li>
                      <li class="d_none"></li>
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
  );
}

export default Navbar1;
