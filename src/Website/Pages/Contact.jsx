import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import axios from "axios";
import { toast } from "react-toastify";


function Contact() {
      const[formvalue,setFormvalue]=useState(
        {
         
          name:"",
          email:"",
          number:"",
          date:"",
          message:""
        },[]);
        
        const changeHandel=(e)=>{
          setFormvalue({...formvalue, id: new Date().getMilliseconds().toString(),[e.target.name]:e.target.value});
          console.log(formvalue);
        }
        function validation() {
          var result = true;
          if (formvalue.name === "") {
            toast.error("Categories Name Field is required !");
            result = false;
            return false;
          }
          if (formvalue.email === "") {
            toast.error("Categories email Field is required !");
            result = false;
            return false;
          }
          if (formvalue.number === "") {
            toast.error("Categories number Field is required !");
            result = false;
            return false;
          }
          // if (formvalue.date == "") {
          //   toast.error("Categories date Field is required !");
          //   result = false;
          //   return false;
          // }
          if (formvalue.message === "") {
            toast.error("Categories message Field is required !");
            result = false;
            return false;
          }
          return result;
        }
        const submitHandle = async(e)=>{
          e.preventDefault();//
          if(validation()){
            const res= await axios.post(`http://localhost:3000/Contac`,formvalue);
            setFormvalue({...formvalue,name:"",email:"",number:"",date:"",message:""});
            toast.success("Thanks for contacting us");
          }        
        }
  return (
    <>
    <Navbar/>
      {/* appointment */}
      <div className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Contact Us</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <form id="request" className="main_form" mathod="post" onSubmit={submitHandle}>
                <div className="row">
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Your name"
                      type="text"
                      value={formvalue.name}
                      onChange={changeHandel}
                      name="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="email"
                      type="email"
                      value={formvalue.email}
                      onChange={changeHandel}
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="number"
                      type="text" maxlength="10"
                      value={formvalue.number}
                      onChange={changeHandel}
                      name="number"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form_control"
                      id="my_date_picker"
                      placeholder="date"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      name="message"
                      value={formvalue.message}
                      onChange={changeHandel}
                      defaultValue={"message "}
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Header/>
      {/* end appointment */}
    </>
  );
}
export default Contact;
