import React,{useEffect,useState}from 'react'
import Navbar1 from '../Component/Navbar1'
import Header1 from '../Component/Header1'
import axios from 'axios';
import { toast } from 'react-toastify';

function Managecategories() {

   const [data,setData]= useState([]);
   useEffect(()=>{
      fetch();
   });

   const fetch = async()=>{
       const res = await axios.get(`http://localhost:3000/categories`);
       console.log(res.data);
       setData(res.data);
   }
   const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);  // get single obj
    console.log(res.data);
    setFormvalue(res.data)
}
   const deleteHandle = async(id)=>{
     const res = await axios.delete(`http://localhost:3000/categories/${id}`);
     toast.success('Categories Delete sucees');
     return false;
   }
   function validation() {

    var result = true;
    if (formvalue.name == "") {
        toast.error('Categories Name Field is required !');
        result = false;
        return false;
    }
    if (formvalue.img == "") {
        toast.error('Categories Image Field is required !');
        result = false;
        return false;
    }
    return result;
}
   const [formvalue,setFormvalue]=useState({
     cat_name:"",
     cat_img:"",
   })

   const changeHandel = (e) => {
    setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
    console.log(formvalue);
}
const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
        const res = await axios.patch(`http://localhost:3000/categories/${formvalue.id}`,formvalue);
        setFormvalue({ ...formvalue,name: "", img: "" });
        toast.success('Categories update Success');
        document.getElementById('myModal').style.display="none";
        return false;
    }
}
    return (
      <div>
          <Navbar1 title="Manage Categories" />
          < div className="container-fluid" >
              <div className="container">
                  <div className="row">

                      <div className=" col-lg-12 ">
                          <div className="bg-light  p-lg-5">
                              <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                              <h1 className="mb-4">Manage Categories</h1>
                              <table className="table">
                                  <thead className="table-dark">
                                      <tr>
                                          <th>ID</th>
                                          <th>Categories Name</th>
                                          <th>Image</th>
                                          <th>Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          data && data.map((value, index, arr) => {
                                              return (
                                                  <tr>
                                                      <td>{value.id}</td>
                                                      <td>{value.name}</td>
                                                      <td><img src={value.image} width="50px" /></td>
                                                      <td>
                                                          <button className='btn btn-info mr-2' onClick={() => editdata(value.id)} data-toggle="modal" data-target="#myModal" >Edit</button>
                                                          <button className='btn btn-danger' onClick={() =>deleteHandle(value.id)}>Delete</button>
                                                      </td>
                                                  </tr>
                                              )
                                          })
                                      }


                                  </tbody>
                              </table>

                              <div className="modal" id="myModal">
                                  <div className="modal-dialog">
                                      <div className="modal-content">
                                          {/* Modal Header */}
                                          <div className="modal-header">
                                              <h4 className="modal-title">Edit Profile</h4>
                                              <button type="button" className="close" data-dismiss="modal">×</button>
                                          </div>
                                          {/* Modal body */}
                                          <div className="modal-body">

                                              <form method='post' name="sentMessage" id="contactForm" onSubmit={submitHandel}>
                                                  <div className="form-row">
                                                      <div className="col-sm-12 control-group">
                                                          <input type="text" value={formvalue.name} onChange={changeHandel} name="name" className="form-control border-0 p-4" id="name" placeholder="Categories Name" />
                                                          <p className="help-block text-danger" />
                                                      </div>
                                                      <div className="col-sm-12 control-group">
                                                          <input type="url" value={formvalue.img} onChange={changeHandel} name="img" className="form-control border-0 p-4" id="img" placeholder="Categories Image" />
                                                          <p className="help-block text-danger" />
                                                      </div>
                                                  </div>

                                                  <div>
                                                      <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                                  </div>
                                              </form>
                                          </div>
                                          {/* Modal footer */}
                                          <div className="modal-footer">
                                              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Header1/>
      </div>
  )
}

export default Managecategories
