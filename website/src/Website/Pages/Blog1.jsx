import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Value } from "sass";

function Blog1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  });

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/blog`);
    console.log(res.data);
    setData(res.data);
  };
  const redirect = useNavigate();
  return (
    <>
      <Navbar />
      {/* blog */}
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <h2>Latest Blog</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu
                </p>
              </div>
            </div>
          </div>
          <div class="row d_flex">
            {
              data && data.map((value, index, arr) => {
                return(
                <div class=" col-md-4">
                  <div class="latest" style={{width:'100%', height: '500px'}}>
                     <figure><img className="img-fluid" style={{height:'250px', width: '100%'}} src={value.image} alt="#"/></figure>
                     <span>16 March</span>
                     <div class="nostrud">
                        <h3>{value.Name} </h3>
                        <p style={{overflow:'hidden', height: '100px', textAlign: 'justify', marginBottom: '7px'}}>{value.des}</p>
                        <a class="read_more" href="blog.html">Read More</a>
                     </div>
                  </div>
               </div>
                )
              })
            }
               
          </div >
        </div>
      </div>
      <Header />
      {/* end blog */}
    </>
  );
}

export default Blog1;
