import React , { useEffect, useState } from 'react'
import Navbar1 from '../Component/Navbar1'
import Header1 from '../Component/Header1'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header2 from '../Component/Header2'

function Addmanageservice() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        desc:"",
        price:"",
        img:""
    })
    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation() {

        var result = true;
        if (formvalue.cate_id == "") {
            toast.error('Categories Field is required !');
            result = false;
            return false;
        }
        if (formvalue.service_name == "") {
            toast.error('Sevice Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.desc == "") {
            toast.error('Description Field is required !');
            result = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('Price Field is required !');
            result = false;
            return false;
        }
        if (formvalue.ser_img == "") {
            toast.error('Service Image Field is required !');
            result = false;
            return false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            setFormvalue({ ...formvalue, name: "",img: "" });
            toast.success('Categories Add Success');
            return false;
        }
    }
  return (
    <div>
      <>             
      <Navbar1/>
         < div className="container-fluid" >
                <div className="container">
                    <div className="row">       
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2 d-flex" style={{textAlign:"center"}}>
                                <Header2/> 
                                    <td>Service</td></h6>
                              
                                <h1 className="mb-4">Add Service</h1>
                                <div id="success" />
                                <form  method='post'  onSubmit={submitHandel} name="sentMessage" >
                                    <div className="form-row">
                                    <div className="col-sm-12 control-group">
                                            <select className="form-control border-0"  value={formvalue.id} onChange={changeHandel} name="id" placeholder="Services Name" >
                                                <option value="" selected>-------- Select Categories ---------</option>
                                                {
                                                    data && data.map((value) => {
                                                        return (
                                                           <option value={value.id}>{value.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.service_name} onChange={changeHandel} name="service_name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4"value={formvalue.ser_img} onChange={changeHandel} name="ser_img" placeholder="Blog Image"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" value={formvalue.price} onChange={changeHandel} name="price" placeholder="Main Price"/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>             
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" value={formvalue.desc} onChange={changeHandel} name="desc" rows={3} placeholder="Blog Description"  defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            </>
       <Header1/>
    </div>
  )
}
export default Addmanageservice
