import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar1 from '../Component/Navbar1';
import Header1 from '../Component/Header1';
import { toast } from 'react-toastify';

function Aprofile() {
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('aid')}`);
            console.log(res.data);
            setFormvalue(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/admin/${localStorage.getItem('aid')}`, formvalue);
            console.log("Profile updated:", res.data);
            toast.success('update sucessfully');
            // Optionally, handle further actions after a successful update
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.success('does not data exist');
        }
    };
    return (
        <div>
            <Navbar1 />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-light p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Admin Profile</h6>
                                <h1 className="mb-4">Edit Profile</h1>
                                <div id="success" />
                                <form method="post" name="sentMessage" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.name} onChange={changeHandel} name="name" placeholder="Admin Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="email" className="form-control border-0 p-4" value={formvalue.email} onChange={changeHandel} name="email" placeholder="Blog Email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="password" className="form-control border-0 p-4" value={formvalue.password} onChange={changeHandel} name="password" placeholder="Blog Password" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header1 />
        </div>
    );
}

export default Aprofile;
