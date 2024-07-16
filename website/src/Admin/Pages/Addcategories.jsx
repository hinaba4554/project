import React,{useState,} from 'react'
import Navbar1 from '../Component/Navbar1'
import Header1 from '../Component/Header1'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Image } from 'lucide-react'
import Header2 from '../Component/Header2'



function Addcategories() {
    const [formvalue, setFormvalue] = useState({
        name: "",
        image: "",
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
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
        <Navbar1/>
        < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2 d-flex">
                                    <Header2/>
                                    <td>Categories</td></h6>
                                <h1 className="mb-4">Add Categories</h1>
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={submitHandel}>
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" onChange={changeHandel} className="form-control border-0 p-4" name="name" placeholder="Blog Title" required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" onChange={changeHandel} className="form-control border-0 p-4" name="image" placeholder="Blog Image" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                   
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows={3} name="message" placeholder="Blog Description" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
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
            <Header1/>
    </div>
  )
}

export default Addcategories
