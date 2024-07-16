import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Service() {
  const [data,setData]= useState([]);

  useEffect(()=>{
    fetch();
  });
  const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/Service');
    console.log(res.data);
    setData(res.data);
  }

  const redirect = useNavigate();
  return (
    <>
      <Navbar />
      {/* services */}
      <div className="services">
        <div className="container">
          <div className="row">
            
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Our Massage Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              data && data.map((value)=>{
                return(
            <div className="col-md-4">
              <div id="ho_shad" className="services_box text_align_left">
                <h3>{value.service_name}</h3>
                <figure>
                  <img src={value.ser_img} alt="#" style={{height:'235px',width:'100%'}} />
                </figure>
                <p>
                {value.desc}
                </p>
                <a className="read_more" href="service.html">
                  Read More
                </a>
              </div>
            </div>
                )
            })
}
            </div>
        </div>
      </div>
      <Header/>
      {/* end services */}
    </>
  );
}

export default Service;
