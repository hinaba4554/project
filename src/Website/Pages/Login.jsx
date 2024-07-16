import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const redirect = useNavigate();
  const [formvalue, setformvalue] = useState({
    email: "",
    password: "",
  });
  const changehandle = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  function validation() {
    var result = true;
    if (formvalue.email === "") {
      toast.error("email field is required");
      result = false;
      return false;
    }
    if (formvalue.password === "") {
      toast.error("passowrd field is required!");
      result = false;
      return false;
    }
    return result;
  }
  const submitHandle = async (e) => {
    console.log("fasdf")
    e.preventDefault();
    // console.log(`Email : ${formvalue.email} pass: ${formvalue.password}`)
    const res = await axios.get(
      `http://localhost:3000/users?email=${formvalue.email}`
    );
    // console.log(res.data)
    if (res.data.length > 0) {
      if (res.data[0].password === formvalue.password) {
        if (res.data[0].status === "unblock") {
          // session create
          localStorage.setItem("uid", res.data[0].id);
          localStorage.setItem("uname", res.data[0].name);
          toast.success("Login Suucees!");
          redirect("/");

          toast.success("Login Suucees!");
        } else {
          toast.error("Account Blocked!");
        }
      } else {
        toast.error("Password incorrect !");
      }
    } else {
      toast.error("Email does not exist !");
    }
  };
  return (
    <>
      <Navbar />
      {/* appointment */}
      <div className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Login Us</h2>
              </div>
            </div>
            <div className="col-md-12">
              <form id="request" className="main_form" method="post" onSubmit={submitHandle}
              >
                <div className="row">
                  <div className="offset-md-3 col-md-6">
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="type"
                      name="email"
                      value={formvalue.email}
                      onChange={changehandle}
                    />
                  </div>
                  <div className="offset-md-3 col-md-6">
                    <input
                      className="form_control"
                      placeholder="Password"
                      type="type"
                      name="password"
                      value={formvalue.password}
                      onChange={changehandle}
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      className="send_btn"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Login
                    </button>
                    <Link to="/signup" className="float-right">
                      If you not registered then Signup Here
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Header />
      {/* end appointment */}
    </>
  );
}

export default Login;
