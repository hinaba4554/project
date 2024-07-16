import React, { useState } from "react";
import Navbar1 from "../Component/Navbar1";
import Header1 from "../Component/Header1";
import { toast } from "react-toastify";
import axios from "axios";
import Header2 from "../Component/Header2";
import Blog1 from "../../Website/Pages/Blog1";

function Addblog() {
  const [formvalue, setformvalue] = useState({
    id: "",
    name: "",
    image: "",
    des: ""
  });
  const changehandle=((e)=>{
    setformvalue({...formvalue,id:new Date().getTime().toString,[e.target.name]:e.target.value});
    console.log(formvalue);
  })
  const validation=() =>{
    var result=true;
    if(formvalue.Name==""){
        toast.error("name field is required");
        result=false;
    }
    if(formvalue.image==""){
        toast.error("image field is required");
        result=false;
    }
    if(formvalue.des==""){
        toast.error("description field is required");
        result=false;
    }
    return result;
  }
  const submithandle=async(e)=>{
    e.preventDefault();//page does not load
    if(validation()){
        const res = await axios.post(`http://localhost:3000/blog`,formvalue);
        console.log(res);
        if(res.status===201){
            toast.success('block add success');
            setformvalue({...formvalue,Name:"",image:"",des:""});
        }
    }

  }
  return (
    <>
      <div>
        <Navbar1 />
       
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-light  p-lg-5 ">
                  <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2 d-flex">
                    <Header2/>
                    <td>Blog</td>
                  </h6>
                  <h1 className="mb-4">Add Blog</h1>
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                    method="post"
                    onSubmit={submithandle}
                  >
                    <div className="form-row">
                      <div className="col-sm-12 control-group">
                        <input
                          type="text"
                          className="form-control border-0 p-4"
                          name="Name"
                          placeholder="Blog Title"
                          value={formvalue.Name}
                          onChange={changehandle}
                          required="required"
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input
                          type="url"
                          className="form-control border-0 p-4"
                          name="image"
                          placeholder="Blog Image"
                          value={formvalue.image}
                          onChange={changehandle}
                          required="required"
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>

                    <div className="control-group">
                      <textarea
                        className="form-control border-0 py-3 px-4"
                        rows={3}
                        name="des"
                        placeholder="Blog Description"
                        value={formvalue.des}
                        onChange={changehandle}
                        required="required"
                        data-validation-required-message="Please enter your message"
                       
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Header1 />
      </div>
    </>
  );
}

export default Addblog;
