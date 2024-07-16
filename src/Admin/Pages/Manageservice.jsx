import React, { useEffect, useState } from "react";
import Navbar1 from "../Component/Navbar1";
import Header1 from "../Component/Header1";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Manageservice() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/Service`);
    console.log(res.data);
    setData(res.data);
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Service/${id}`);
    fetch();
  };
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Service/${id}`); // get single obj
    console.log(res.data);
    setFormvalue(res.data);
  };

  function validation() {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Categories Name Field is required !");
      result = false;
      return false;
    }
    if (formvalue.img == "") {
      toast.error("Categories Image Field is required !");
      result = false;
      return false;
    }
    return result;
  }
  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_id: "",
    service_name: "",
    desc: "",
    price: "",
    ser_img: "",
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/Service/${formvalue.id}`,
        formvalue
      );
      setFormvalue({
        ...formvalue,
        id: "",
        cate_id: "",
        service_name: "",
        desc: "",
        price: "",
        ser_img: "",
      });
      toast.success("Categories update Success");
      document.getElementById("myModal").style.display = "none";
      return false;
    }
  };

  return (
    <>
      <div>
        <Navbar1 />
        <div class="container">
          <h2>Manage Service</h2>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categories ID</th>
                <th>name</th>
                <th>Service Name</th>
                <th>Main Price</th>
                <th>Service Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
            {data &&
              data.map((value, index, arr) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.cate_id}</td>
                    <td>{value.service_name}</td>
                    <td>{value.desc}</td>
                    <td>{value.price}</td>
                    <td>
                      <img src={value.ser_img} alt="" width="50px" />
                    </td>
                    <td>
                      <button
                        className="btn btn-info mr-2"
                        onClick={() => editdata(value.id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandel(value.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Edit Profile</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <form
                    method="post"
                    name="sentMessage"
                    id="contactForm"
                    onChange={changeHandel}
                    onSubmit={submitHandel}
                  >
                    <div className="form-row">
                      <div className="col-sm-12 control-group">
                        <input
                          type="text"
                          value={formvalue.service_name}
                          name="service_name"
                          className="form-control border-0 p-4"
                          id="name"
                          placeholder="Categories Name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input
                          type="text"
                          value={formvalue.desc}
                          name="desc"
                          className="form-control border-0 p-4"
                          id="name"
                          placeholder="Categories Name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input
                          type="text"
                          value={formvalue.price}
                          name="price"
                          className="form-control border-0 p-4"
                          id="name"
                          placeholder="Categories Name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="col-sm-12 control-group">
                        <input
                          type="url"
                          value={formvalue.ser_img}
                          name="ser_img"
                          className="form-control border-0 p-4"
                          id="img"
                          placeholder="Categories Image"
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>

                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
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

export default Manageservice;
